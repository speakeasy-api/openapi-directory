import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action for an experiment template.
 */
export declare class ExperimentTemplateAction extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    parameters?: Record<string, string>;
    startAfter?: string[];
    targets?: Record<string, string>;
}
