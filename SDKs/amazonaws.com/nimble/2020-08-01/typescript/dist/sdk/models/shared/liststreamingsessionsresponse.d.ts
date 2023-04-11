import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSession } from "./streamingsession";
/**
 * Success
 */
export declare class ListStreamingSessionsResponse extends SpeakeasyBase {
    nextToken?: string;
    sessions?: StreamingSession[];
}
