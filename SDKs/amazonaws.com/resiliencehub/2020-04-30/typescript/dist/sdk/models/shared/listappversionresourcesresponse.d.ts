import { SpeakeasyBase } from "../../../internal/utils";
import { PhysicalResource } from "./physicalresource";
/**
 * Success
 */
export declare class ListAppVersionResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    physicalResources: PhysicalResource[];
    resolutionId: string;
}
