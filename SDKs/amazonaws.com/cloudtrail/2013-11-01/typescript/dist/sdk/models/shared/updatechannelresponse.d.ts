import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Success
 */
export declare class UpdateChannelResponse extends SpeakeasyBase {
    channelArn?: string;
    destinations?: Destination[];
    name?: string;
    source?: string;
}
