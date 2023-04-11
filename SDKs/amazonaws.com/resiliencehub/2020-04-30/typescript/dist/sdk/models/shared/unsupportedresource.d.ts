import { SpeakeasyBase } from "../../../internal/utils";
import { LogicalResourceId } from "./logicalresourceid";
import { PhysicalResourceId } from "./physicalresourceid";
/**
 * Defines a resource that is not supported by Resilience Hub.
 */
export declare class UnsupportedResource extends SpeakeasyBase {
    logicalResourceId: LogicalResourceId;
    physicalResourceId: PhysicalResourceId;
    resourceType: string;
    unsupportedResourceStatus?: string;
}
