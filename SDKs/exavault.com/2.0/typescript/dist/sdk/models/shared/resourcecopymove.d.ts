import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Resource which was successfully copied or moved.
**/
export declare class ResourceCopyMove extends SpeakeasyBase {
    data?: Resource;
    meta?: Record<string, any>;
}
