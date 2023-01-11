import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceDeleteTypeEnum {
    Resource = "resource"
}
/**
 * All properties of the resource delete object
**/
export declare class ResourceDelete extends SpeakeasyBase {
    id?: number;
    meta?: Record<string, any>;
    type?: ResourceDeleteTypeEnum;
}
