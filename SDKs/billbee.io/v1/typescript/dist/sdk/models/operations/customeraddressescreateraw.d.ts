import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerAddressesCreateRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
