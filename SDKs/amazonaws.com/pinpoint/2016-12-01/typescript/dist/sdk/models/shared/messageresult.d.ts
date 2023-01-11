import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
export declare class MessageResult extends SpeakeasyBase {
    deliveryStatus?: DeliveryStatusEnum;
    messageId?: string;
    statusCode?: number;
    statusMessage?: string;
    updatedToken?: string;
}
