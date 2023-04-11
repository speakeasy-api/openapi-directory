import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedResource } from "./provisionedresource";
/**
 * Success
 */
export declare class ListServicePipelineProvisionedResourcesOutput extends SpeakeasyBase {
    nextToken?: string;
    provisionedResources: ProvisionedResource[];
}
