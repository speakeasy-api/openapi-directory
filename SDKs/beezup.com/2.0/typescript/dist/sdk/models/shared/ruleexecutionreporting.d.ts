import { SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
import { RuleExecutionReportingErrorTypeEnum } from "./ruleexecutionreportingerrortypeenum";
import { RuleExecutionReportingExecutionSourceEnum } from "./ruleexecutionreportingexecutionsourceenum";
import { RuleExecutionReportingLinks } from "./ruleexecutionreportinglinks";
import { RuleExecutionReportingStatusEnum } from "./ruleexecutionreportingstatusenum";
export declare class RuleExecutionReporting extends SpeakeasyBase {
    /**
     * The count of affected active products
     */
    activeAffectedProductCount?: number;
    /**
     * The count of affected Channels across all products
     */
    affectedChannelCount?: number;
    /**
     * The count of affected products, active or not
     */
    affectedProductCount?: number;
    /**
     * The completed utc date of the execution of the rule
     */
    completedUtcDate?: Date;
    /**
     * The error type for this execution if any
     */
    errorType?: RuleExecutionReportingErrorTypeEnum;
    /**
     * The requestor type for the execution of the rule
     */
    executionSource: RuleExecutionReportingExecutionSourceEnum;
    /**
     * Links to retrieve/action on this rule execution
     */
    links?: RuleExecutionReportingLinks;
    /**
     * The optimisation action
     */
    optimisationActionName?: OptimisationActionNameEnum;
    /**
     * The url for the excel report for this execution
     */
    reportUrl?: string;
    /**
     * The rule identifier
     */
    ruleId: string;
    /**
     * The name of the rule
     */
    ruleName: string;
    /**
     * The start utc date of the execution of the rule
     */
    startedUtcDate?: Date;
    /**
     * The status of the execution of the rule
     */
    status: RuleExecutionReportingStatusEnum;
    /**
     * The userId that executed the rule if any
     */
    userId?: string;
}
