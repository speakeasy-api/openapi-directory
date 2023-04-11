import { SpeakeasyBase } from "../../../internal/utils";
import { ActionParameters } from "./actionparameters";
/**
 * Describes the configuration of an event. You can bind an event and a corresponding action to a <code>Component</code> or a <code>ComponentChild</code>. A button click is an example of an event.
 */
export declare class ComponentEvent extends SpeakeasyBase {
    action?: string;
    bindingEvent?: string;
    parameters?: ActionParameters;
}
