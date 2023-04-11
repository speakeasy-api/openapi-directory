import { SpeakeasyBase } from "../../../internal/utils";
import { QueryExecution } from "./queryexecution";
import { UnprocessedQueryExecutionId } from "./unprocessedqueryexecutionid";
/**
 * Success
 */
export declare class BatchGetQueryExecutionOutput extends SpeakeasyBase {
    queryExecutions?: QueryExecution[];
    unprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];
}
