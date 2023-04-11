import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerUpdateAddressRawRequest extends SpeakeasyBase {
    /**
     * The updated address. Please query an address via (todo) to see all fields. Note that Id and CustomerId cannot be changed.
     */
    requestBody: Uint8Array;
    /**
     * The id of the address
     */
    id: number;
}
export declare class CustomerUpdateAddressRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
