import { SpeakeasyBase } from "../../../internal/utils";
import { StepActionTypeEnum } from "./stepactiontypeenum";
import { StepAutomationConfiguration } from "./stepautomationconfiguration";
import { StepOutput } from "./stepoutput";
/**
 * Success
 */
export declare class GetTemplateStepResponse extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    id?: string;
    name?: string;
    next?: string[];
    outputs?: StepOutput[];
    previous?: string[];
    stepActionType?: StepActionTypeEnum;
    stepAutomationConfiguration?: StepAutomationConfiguration;
    stepGroupId?: string;
    templateId?: string;
}
