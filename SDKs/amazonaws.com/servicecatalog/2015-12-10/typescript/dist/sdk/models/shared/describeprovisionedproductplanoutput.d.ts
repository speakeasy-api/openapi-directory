import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanDetails } from "./provisionedproductplandetails";
import { ResourceChange } from "./resourcechange";
/**
 * Success
 */
export declare class DescribeProvisionedProductPlanOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProductPlanDetails?: ProvisionedProductPlanDetails;
    resourceChanges?: ResourceChange[];
}
