import { SpeakeasyBase } from "../../../internal/utils";
import { TargetResourceTypeParameter } from "./targetresourcetypeparameter";
/**
 * Describes a resource type.
 */
export declare class TargetResourceType extends SpeakeasyBase {
    description?: string;
    parameters?: Record<string, TargetResourceTypeParameter>;
    resourceType?: string;
}
