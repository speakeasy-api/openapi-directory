import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentEvent } from "./componentevent";
/**
 * A nested UI configuration within a parent <code>Component</code>.
 */
export declare class ComponentChild extends SpeakeasyBase {
    children?: ComponentChild[];
    componentType: string;
    events?: Record<string, ComponentEvent>;
    name: string;
    /**
     * Describes the properties of the child component. You can't specify <code>tags</code> as a valid property for <code>properties</code>.
     */
    properties: any;
    sourceId?: string;
}
