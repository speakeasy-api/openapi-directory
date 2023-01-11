import { SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
export declare class CreateRuleRequest extends SpeakeasyBase {
    endUtcDate?: Date;
    optimisationActionName: OptimisationActionNameEnum;
    reportFilterId: string;
    ruleName: string;
    startUtcDate?: Date;
}
