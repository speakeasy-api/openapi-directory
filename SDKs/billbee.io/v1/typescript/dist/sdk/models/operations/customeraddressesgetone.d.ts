import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerAddressesGetOneRequest extends SpeakeasyBase {
    /**
     * The id of the address to query
     */
    id: number;
}
export declare class CustomerAddressesGetOneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
