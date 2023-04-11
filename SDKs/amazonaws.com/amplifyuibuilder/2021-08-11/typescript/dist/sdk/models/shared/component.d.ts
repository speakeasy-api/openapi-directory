import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentBindingPropertiesValue } from "./componentbindingpropertiesvalue";
import { ComponentChild } from "./componentchild";
import { ComponentDataConfiguration } from "./componentdataconfiguration";
import { ComponentEvent } from "./componentevent";
import { ComponentVariant } from "./componentvariant";
/**
 * Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use <code>ComponentChild</code> to configure an instance of a <code>Component</code>. A <code>ComponentChild</code> instance inherits the configuration of the main <code>Component</code>.
 */
export declare class Component extends SpeakeasyBase {
    appId: string;
    bindingProperties: Record<string, ComponentBindingPropertiesValue>;
    children?: ComponentChild[];
    collectionProperties?: Record<string, ComponentDataConfiguration>;
    componentType: string;
    createdAt: Date;
    environmentName: string;
    events?: Record<string, ComponentEvent>;
    id: string;
    modifiedAt?: Date;
    name: string;
    overrides: Record<string, Record<string, string>>;
    /**
     * Describes the component's properties. You can't specify <code>tags</code> as a valid property for <code>properties</code>.
     */
    properties: any;
    schemaVersion?: string;
    sourceId?: string;
    tags?: Record<string, string>;
    variants: ComponentVariant[];
}
