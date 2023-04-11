import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerUpdateRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    /**
     * The id of the customer
     */
    id: number;
}
export declare class CustomerUpdateRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
