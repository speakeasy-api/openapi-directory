import { SpeakeasyBase } from "../../../internal/utils";
import { ActionParameter } from "./actionparameter";
import { ActionTarget } from "./actiontarget";
/**
 * Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a> in the <i>Fault Injection Simulator User Guide</i>.
 */
export declare class Action extends SpeakeasyBase {
    description?: string;
    id?: string;
    parameters?: Record<string, ActionParameter>;
    tags?: Record<string, string>;
    targets?: Record<string, ActionTarget>;
}
