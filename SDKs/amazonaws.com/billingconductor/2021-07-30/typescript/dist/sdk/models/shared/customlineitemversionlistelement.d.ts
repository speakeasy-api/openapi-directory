import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { ListCustomLineItemChargeDetails } from "./listcustomlineitemchargedetails";
/**
 * A representation of a custom line item version.
 */
export declare class CustomLineItemVersionListElement extends SpeakeasyBase {
    arn?: string;
    associationSize?: number;
    billingGroupArn?: string;
    /**
     *  A representation of the charge details of a custom line item.
     */
    chargeDetails?: ListCustomLineItemChargeDetails;
    creationTime?: number;
    currencyCode?: CurrencyCodeEnum;
    description?: string;
    endBillingPeriod?: string;
    lastModifiedTime?: number;
    name?: string;
    productCode?: string;
    startBillingPeriod?: string;
    startTime?: number;
}
