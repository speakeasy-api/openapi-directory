import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomerGetCustomerOrdersRequest extends SpeakeasyBase {
    /**
     * The id of the customer
     */
    id: number;
    /**
     * The current page to request starting with 1
     */
    page?: number;
    /**
     * The pagesize for the result list. Values between 1 and 250 are allowed
     */
    pageSize?: number;
}
export declare class CustomerGetCustomerOrdersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder?: shared.RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
