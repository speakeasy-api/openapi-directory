import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerAddCustomerAddressFormRequest extends SpeakeasyBase {
    /**
     * Model containing the address, that should be attached.
     */
    billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    /**
     * CustomerId to attach the new address to.
     */
    id: number;
}
export declare class CustomerAddCustomerAddressFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
