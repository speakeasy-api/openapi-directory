import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentPropertyGroupResponse } from "./componentpropertygroupresponse";
import { Status } from "./status";
/**
 * An object that returns information about a component type create or update request.
 */
export declare class ComponentResponse extends SpeakeasyBase {
    componentName?: string;
    componentTypeId?: string;
    definedIn?: string;
    description?: string;
    /**
     * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
     */
    properties?: any;
    propertyGroups?: Record<string, ComponentPropertyGroupResponse>;
    status?: Status;
    syncSource?: string;
}
