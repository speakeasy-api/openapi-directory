import { SpeakeasyBase } from "../../../internal/utils";
import { OrderStatusEnum } from "./orderstatusenum";
import { OrderTypeEnum } from "./ordertypeenum";
/**
 *  A summary of line items in your order.
 */
export declare class OrderSummary extends SpeakeasyBase {
    lineItemCountsByStatus?: Record<string, number>;
    orderFulfilledDate?: Date;
    orderId?: string;
    orderSubmissionDate?: Date;
    orderType?: OrderTypeEnum;
    outpostId?: string;
    status?: OrderStatusEnum;
}
