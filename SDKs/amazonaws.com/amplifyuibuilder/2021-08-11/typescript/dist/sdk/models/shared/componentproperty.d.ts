import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentConditionProperty } from "./componentconditionproperty";
import { ComponentPropertyBindingProperties } from "./componentpropertybindingproperties";
import { FormBindingElement } from "./formbindingelement";
/**
 * Describes the configuration for all of a component's properties. Use <code>ComponentProperty</code> to specify the values to render or bind by default.
 */
export declare class ComponentProperty extends SpeakeasyBase {
    bindingProperties?: ComponentPropertyBindingProperties;
    bindings?: Record<string, FormBindingElement>;
    collectionBindingProperties?: ComponentPropertyBindingProperties;
    componentName?: string;
    concat?: ComponentProperty[];
    condition?: ComponentConditionProperty;
    configured?: boolean;
    defaultValue?: string;
    event?: string;
    importedValue?: string;
    model?: string;
    property?: string;
    type?: string;
    userAttribute?: string;
    value?: string;
}
