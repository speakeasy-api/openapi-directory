import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiPostNewOrderRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    /**
     * Deprecated, if orderData.ApiAccountId is set, it will be used instead of 'shopId'
     */
    shopId?: number;
}
export declare class OrderApiPostNewOrderRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * The order was created successfully
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
