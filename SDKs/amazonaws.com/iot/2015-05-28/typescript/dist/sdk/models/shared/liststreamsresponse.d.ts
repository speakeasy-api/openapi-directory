import { SpeakeasyBase } from "../../../internal/utils";
import { StreamSummary } from "./streamsummary";
/**
 * Success
 */
export declare class ListStreamsResponse extends SpeakeasyBase {
    nextToken?: string;
    streams?: StreamSummary[];
}
