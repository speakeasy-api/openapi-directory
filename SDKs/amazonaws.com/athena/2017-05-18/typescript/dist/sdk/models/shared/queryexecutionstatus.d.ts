import { SpeakeasyBase } from "../../../internal/utils";
import { AthenaError } from "./athenaerror";
import { QueryExecutionStateEnum } from "./queryexecutionstateenum";
/**
 * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
 */
export declare class QueryExecutionStatus extends SpeakeasyBase {
    athenaError?: AthenaError;
    completionDateTime?: Date;
    state?: QueryExecutionStateEnum;
    stateChangeReason?: string;
    submissionDateTime?: Date;
}
