import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerUpdateFormRequest extends SpeakeasyBase {
    billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput: shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
    /**
     * The id of the customer
     */
    id: number;
}
export declare class CustomerUpdateFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
