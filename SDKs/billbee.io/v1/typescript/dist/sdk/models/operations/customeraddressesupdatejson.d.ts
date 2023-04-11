import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerAddressesUpdateJsonRequest extends SpeakeasyBase {
    billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    /**
     * The id of the address
     */
    id: number;
}
export declare class CustomerAddressesUpdateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
