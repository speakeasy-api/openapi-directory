import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Resource which was successfully copied or moved.
 */
export declare class ResourceCopyMove extends SpeakeasyBase {
    /**
     * All properties of the resource.
     */
    data?: Resource;
    /**
     * Meta object containing non-standard meta-information about the operation.
     */
    meta?: Record<string, any>;
}
