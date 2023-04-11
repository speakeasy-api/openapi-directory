import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentProperty } from "./componentproperty";
/**
 * Represents the state configuration when an action modifies a property of another element within the same component.
 */
export declare class MutationActionSetStateParameter extends SpeakeasyBase {
    componentName: string;
    property: string;
    set: ComponentProperty;
}
