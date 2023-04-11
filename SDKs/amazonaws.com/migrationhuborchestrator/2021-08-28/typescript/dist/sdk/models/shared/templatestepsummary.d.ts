import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { StepActionTypeEnum } from "./stepactiontypeenum";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * The summary of the step.
 */
export declare class TemplateStepSummary extends SpeakeasyBase {
    id?: string;
    name?: string;
    next?: string[];
    owner?: OwnerEnum;
    previous?: string[];
    stepActionType?: StepActionTypeEnum;
    stepGroupId?: string;
    targetType?: TargetTypeEnum;
    templateId?: string;
}
