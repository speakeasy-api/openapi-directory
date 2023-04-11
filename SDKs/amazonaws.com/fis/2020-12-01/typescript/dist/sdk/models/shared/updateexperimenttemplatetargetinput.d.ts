import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";
/**
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.
 */
export declare class UpdateExperimentTemplateTargetInput extends SpeakeasyBase {
    filters?: ExperimentTemplateTargetInputFilter[];
    parameters?: Record<string, string>;
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType: string;
    selectionMode: string;
}
