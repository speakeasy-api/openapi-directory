import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentPropertyGroupRequest } from "./componentpropertygrouprequest";
import { ComponentUpdateTypeEnum } from "./componentupdatetypeenum";
import { PropertyRequest } from "./propertyrequest";
/**
 * The component update request.
 */
export declare class ComponentUpdateRequest extends SpeakeasyBase {
    componentTypeId?: string;
    description?: string;
    propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest>;
    propertyUpdates?: Record<string, PropertyRequest>;
    updateType?: ComponentUpdateTypeEnum;
}
