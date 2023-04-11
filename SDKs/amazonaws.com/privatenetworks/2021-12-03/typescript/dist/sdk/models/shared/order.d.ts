import { SpeakeasyBase } from "../../../internal/utils";
import { AcknowledgmentStatusEnum } from "./acknowledgmentstatusenum";
import { Address } from "./address";
import { TrackingInformation } from "./trackinginformation";
/**
 * Information about an order.
 */
export declare class Order extends SpeakeasyBase {
    acknowledgmentStatus?: AcknowledgmentStatusEnum;
    createdAt?: Date;
    networkArn?: string;
    networkSiteArn?: string;
    orderArn?: string;
    shippingAddress?: Address;
    trackingInformation?: TrackingInformation[];
}
