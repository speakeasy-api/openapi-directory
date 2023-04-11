import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerAddressesGetAllRequest extends SpeakeasyBase {
    /**
     * The current page to request starting with 1 (default is 1)
     */
    page?: number;
    /**
     * The page size for the result list. Values between 1 and 250 are allowed. (default is 50)
     */
    pageSize?: number;
}
export declare class CustomerAddressesGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
