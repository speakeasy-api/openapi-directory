import { SpeakeasyBase } from "../../../internal/utils";
import { ListCustomLineItemChargeDetails } from "./listcustomlineitemchargedetails";
/**
 * Success
 */
export declare class UpdateCustomLineItemOutput extends SpeakeasyBase {
    arn?: string;
    associationSize?: number;
    billingGroupArn?: string;
    chargeDetails?: ListCustomLineItemChargeDetails;
    description?: string;
    lastModifiedTime?: number;
    name?: string;
}
