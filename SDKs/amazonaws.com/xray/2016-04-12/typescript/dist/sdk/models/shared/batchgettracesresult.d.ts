import { SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";
/**
 * Success
 */
export declare class BatchGetTracesResult extends SpeakeasyBase {
    nextToken?: string;
    traces?: Trace[];
    unprocessedTraceIds?: string[];
}
