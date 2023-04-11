import { SpeakeasyBase } from "../../../internal/utils";
import { CustomLineItemTypeEnum } from "./customlineitemtypeenum";
import { ListCustomLineItemFlatChargeDetails } from "./listcustomlineitemflatchargedetails";
import { ListCustomLineItemPercentageChargeDetails } from "./listcustomlineitempercentagechargedetails";
/**
 *  A representation of the charge details of a custom line item.
 */
export declare class ListCustomLineItemChargeDetails extends SpeakeasyBase {
    flat?: ListCustomLineItemFlatChargeDetails;
    percentage?: ListCustomLineItemPercentageChargeDetails;
    type: CustomLineItemTypeEnum;
}
