import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentBindingPropertiesValueProperties } from "./componentbindingpropertiesvalueproperties";
/**
 * Represents the data binding configuration for a component at runtime. You can use <code>ComponentBindingPropertiesValue</code> to add exposed properties to a component to allow different values to be entered when a component is reused in different places in an app.
 */
export declare class ComponentBindingPropertiesValue extends SpeakeasyBase {
    bindingProperties?: ComponentBindingPropertiesValueProperties;
    defaultValue?: string;
    type?: string;
}
