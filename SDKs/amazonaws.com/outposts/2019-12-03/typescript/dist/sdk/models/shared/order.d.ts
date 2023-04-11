import { SpeakeasyBase } from "../../../internal/utils";
import { LineItem } from "./lineitem";
import { OrderStatusEnum } from "./orderstatusenum";
import { OrderTypeEnum } from "./ordertypeenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { PaymentTermEnum } from "./paymenttermenum";
/**
 * Information about an order.
 */
export declare class Order extends SpeakeasyBase {
    lineItems?: LineItem[];
    orderFulfilledDate?: Date;
    orderId?: string;
    orderSubmissionDate?: Date;
    orderType?: OrderTypeEnum;
    outpostId?: string;
    paymentOption?: PaymentOptionEnum;
    paymentTerm?: PaymentTermEnum;
    status?: OrderStatusEnum;
}
