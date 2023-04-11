import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { ListCustomLineItemChargeDetails } from "./listcustomlineitemchargedetails";
/**
 *  A representation of a custom line item.
 */
export declare class CustomLineItemListElement extends SpeakeasyBase {
    arn?: string;
    associationSize?: number;
    billingGroupArn?: string;
    chargeDetails?: ListCustomLineItemChargeDetails;
    creationTime?: number;
    currencyCode?: CurrencyCodeEnum;
    description?: string;
    lastModifiedTime?: number;
    name?: string;
    productCode?: string;
}
