import { SpeakeasyBase } from "../../../internal/utils";
import { LogStream } from "./logstream";
/**
 * Success
 */
export declare class DescribeLogStreamsResponse extends SpeakeasyBase {
    logStreams?: LogStream[];
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
}
