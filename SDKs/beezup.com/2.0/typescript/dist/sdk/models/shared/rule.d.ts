import { SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
import { RuleLastExecutionStatusEnum } from "./rulelastexecutionstatusenum";
import { RuleLinks } from "./rulelinks";
export declare class Rule extends SpeakeasyBase {
    actionName: OptimisationActionNameEnum;
    enabled: boolean;
    lastExecutionStatus?: RuleLastExecutionStatusEnum;
    lastExecutionUtcDate?: Date;
    links: RuleLinks;
    position: number;
    reportFilterId: string;
    ruleId: string;
    ruleName: string;
    validityEndUtcDate?: Date;
    validityStartUtcDate?: Date;
}
