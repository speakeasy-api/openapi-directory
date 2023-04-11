import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerAddressesUpdateFormRequest extends SpeakeasyBase {
    billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    /**
     * The id of the address
     */
    id: number;
}
export declare class CustomerAddressesUpdateFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
