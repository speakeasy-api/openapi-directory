import { SpeakeasyBase } from "../../../internal/utils";
import { UnsupportedResource } from "./unsupportedresource";
/**
 * Success
 */
export declare class ListUnsupportedAppVersionResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resolutionId: string;
    unsupportedResources: UnsupportedResource[];
}
