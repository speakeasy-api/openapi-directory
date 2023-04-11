import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an action for an experiment template.
 */
export declare class UpdateExperimentTemplateActionInputItem extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    parameters?: Record<string, string>;
    startAfter?: string[];
    targets?: Record<string, string>;
}
