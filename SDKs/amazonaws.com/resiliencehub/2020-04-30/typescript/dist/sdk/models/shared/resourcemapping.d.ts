import { SpeakeasyBase } from "../../../internal/utils";
import { PhysicalResourceId } from "./physicalresourceid";
import { ResourceMappingTypeEnum } from "./resourcemappingtypeenum";
/**
 * Defines a resource mapping.
 */
export declare class ResourceMapping extends SpeakeasyBase {
    appRegistryAppName?: string;
    eksSourceName?: string;
    logicalStackName?: string;
    mappingType: ResourceMappingTypeEnum;
    physicalResourceId: PhysicalResourceId;
    resourceGroupName?: string;
    resourceName?: string;
    terraformSourceName?: string;
}
