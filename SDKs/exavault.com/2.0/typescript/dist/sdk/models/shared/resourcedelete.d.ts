import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of item. "resource"
 */
export declare enum ResourceDeleteTypeEnum {
    Resource = "resource"
}
/**
 * All properties of the resource delete object
 */
export declare class ResourceDelete extends SpeakeasyBase {
    id?: number;
    /**
     * Meta object containing non-standard meta-information about the delete operation.
     */
    meta?: Record<string, any>;
    /**
     * Type of item. "resource"
     */
    type?: ResourceDeleteTypeEnum;
}
