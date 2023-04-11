import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerPatchAddressRequest extends SpeakeasyBase {
    /**
     * The address fields to be changed. Please query an address via (todo) to see all fields. Note that Id and CustomerId cannot be changed.
     */
    requestBody: Record<string, any>;
    /**
     * The id of the address
     */
    id: number;
}
export declare class CustomerPatchAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
