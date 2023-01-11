import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
export declare class EndpointMessageResult extends SpeakeasyBase {
    address?: string;
    deliveryStatus?: DeliveryStatusEnum;
    messageId?: string;
    statusCode?: number;
    statusMessage?: string;
    updatedToken?: string;
}
