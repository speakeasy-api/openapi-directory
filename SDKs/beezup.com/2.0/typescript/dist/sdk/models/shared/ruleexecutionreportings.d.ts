import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { RuleExecutionReporting } from "./ruleexecutionreporting";
/**
 * Rules executions list
 */
export declare class RuleExecutionReportings extends SpeakeasyBase {
    /**
     * The rules executions history
     */
    executions?: RuleExecutionReporting[];
    paginationResult?: BeezUPCommonPaginationResult;
}
