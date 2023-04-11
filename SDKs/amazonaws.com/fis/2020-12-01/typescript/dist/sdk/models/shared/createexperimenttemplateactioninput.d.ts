import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export declare class CreateExperimentTemplateActionInput extends SpeakeasyBase {
    actionId: string;
    description?: string;
    parameters?: Record<string, string>;
    startAfter?: string[];
    targets?: Record<string, string>;
}
