import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTerminalsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetTerminalsRequest extends SpeakeasyBase {
    /**
     * Returns terminals of the [models](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) specified in the format *brand.model*.
     */
    brandModels?: string;
    /**
     * Returns terminals located in the countries specified by their [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    countries?: string;
    /**
     * Returns terminals that belong to the merchant accounts specified by their unique merchant account ID.
     */
    merchantIds?: string;
    /**
     * The number of the page to fetch.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 20 items on a page.
     */
    pageSize?: number;
    /**
     * Returns terminals with an ID that contains the specified string. If present, other query parameters are ignored.
     */
    searchQuery?: string;
    /**
     * Returns terminals that are assigned to the [stores](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores) specified by their unique store ID.
     */
    storeIds?: string;
}
export declare class GetTerminalsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    listTerminalsResponse?: shared.ListTerminalsResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
