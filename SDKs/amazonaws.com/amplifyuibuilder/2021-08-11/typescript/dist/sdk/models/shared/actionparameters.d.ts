import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentProperty } from "./componentproperty";
import { MutationActionSetStateParameter } from "./mutationactionsetstateparameter";
/**
 * Represents the event action configuration for an element of a <code>Component</code> or <code>ComponentChild</code>. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components. <code>ActionParameters</code> defines the action that is performed when an event occurs on the component.
 */
export declare class ActionParameters extends SpeakeasyBase {
    anchor?: ComponentProperty;
    fields?: Record<string, ComponentProperty>;
    global?: ComponentProperty;
    id?: ComponentProperty;
    model?: string;
    state?: MutationActionSetStateParameter;
    target?: ComponentProperty;
    type?: ComponentProperty;
    url?: ComponentProperty;
}
