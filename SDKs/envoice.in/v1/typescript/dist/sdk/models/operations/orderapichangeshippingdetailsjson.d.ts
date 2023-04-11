import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiChangeShippingDetailsJsonRequest extends SpeakeasyBase {
    orderShippingDetailsApiModel: shared.OrderShippingDetailsApiModel;
    orderId: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiChangeShippingDetailsJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
