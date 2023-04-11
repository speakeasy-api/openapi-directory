import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiPostNewOrderJsonRequest extends SpeakeasyBase {
    billbeeInterfacesBillbeeAPIModelOrderInput: shared.BillbeeInterfacesBillbeeAPIModelOrderInput;
    /**
     * Deprecated, if orderData.ApiAccountId is set, it will be used instead of 'shopId'
     */
    shopId?: number;
}
export declare class OrderApiPostNewOrderJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * The order was created successfully
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
