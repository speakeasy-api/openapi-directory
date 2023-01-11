import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";
export declare class UpdateExperimentTemplateTargetInput extends SpeakeasyBase {
    filters?: ExperimentTemplateTargetInputFilter[];
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType?: string;
    selectionMode?: string;
}
