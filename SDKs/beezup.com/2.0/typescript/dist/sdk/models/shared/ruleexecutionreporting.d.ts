import { SpeakeasyBase } from "../../../internal/utils";
import { RuleExecutionReportingErrorTypeEnum } from "./ruleexecutionreportingerrortypeenum";
import { RuleExecutionReportingExecutionSourceEnum } from "./ruleexecutionreportingexecutionsourceenum";
import { RuleExecutionReportingLinks } from "./ruleexecutionreportinglinks";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
import { RuleExecutionReportingStatusEnum } from "./ruleexecutionreportingstatusenum";
export declare class RuleExecutionReporting extends SpeakeasyBase {
    activeAffectedProductCount?: number;
    affectedChannelCount?: number;
    affectedProductCount?: number;
    completedUtcDate?: Date;
    errorType?: RuleExecutionReportingErrorTypeEnum;
    executionSource: RuleExecutionReportingExecutionSourceEnum;
    links?: RuleExecutionReportingLinks;
    optimisationActionName?: OptimisationActionNameEnum;
    reportUrl?: string;
    ruleId: string;
    ruleName: string;
    startedUtcDate?: Date;
    status: RuleExecutionReportingStatusEnum;
    userId?: string;
}
