import { SpeakeasyBase } from "../../../internal/utils";
import { StreamInfo } from "./streaminfo";
/**
 * Success
 */
export declare class ListStreamsOutput extends SpeakeasyBase {
    nextToken?: string;
    streamInfoList?: StreamInfo[];
}
