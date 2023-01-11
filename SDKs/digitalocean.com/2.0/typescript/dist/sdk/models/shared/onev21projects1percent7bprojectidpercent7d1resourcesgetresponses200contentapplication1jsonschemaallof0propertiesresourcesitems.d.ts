import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The links object contains the `self` object, which contains the resource relationship.
**/
export declare class Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks extends SpeakeasyBase {
    self?: string;
}
export declare enum Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum {
    Ok = "ok",
    NotFound = "not_found",
    Assigned = "assigned",
    AlreadyAssigned = "already_assigned",
    ServiceDown = "service_down"
}
export declare class Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems extends SpeakeasyBase {
    assignedAt?: Date;
    links?: Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks;
    status?: Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum;
    urn?: string;
}
