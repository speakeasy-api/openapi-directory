import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentPropertyGroupRequest } from "./componentpropertygrouprequest";
/**
 * An object that sets information about a component type create or update request.
 */
export declare class ComponentRequest extends SpeakeasyBase {
    componentTypeId?: string;
    description?: string;
    /**
     * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
     */
    properties?: any;
    propertyGroups?: Record<string, ComponentPropertyGroupRequest>;
}
