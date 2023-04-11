import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * Success
 */
export declare class ListChannelsResponse extends SpeakeasyBase {
    channels?: Channel[];
    nextToken?: string;
}
