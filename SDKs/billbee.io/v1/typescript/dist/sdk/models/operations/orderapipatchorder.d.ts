import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiPatchOrderRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    id: number;
}
export declare class OrderApiPatchOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
