import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerCreateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
