import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDetails } from "./resourcedetails";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The information about the resource.
 */
export declare class ResourceInfo extends SpeakeasyBase {
    arn?: string;
    name?: string;
    resourceDetails?: ResourceDetails;
    resourceType?: ResourceTypeEnum;
}
