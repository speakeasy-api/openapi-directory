import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedResource } from "./provisionedresource";
/**
 * Success
 */
export declare class ListServiceInstanceProvisionedResourcesOutput extends SpeakeasyBase {
    nextToken?: string;
    provisionedResources: ProvisionedResource[];
}
