import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BusinessLines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a business line
     *
     * @remarks
     * Deletes a business line.
     *
     *  >"If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.
     */
    deleteBusinessLinesId(req: operations.DeleteBusinessLinesIdRequest, security: operations.DeleteBusinessLinesIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteBusinessLinesIdResponse>;
    /**
     * Get a business line
     *
     * @remarks
     * Returns the detail of a business line.
     */
    getBusinessLinesId(req: operations.GetBusinessLinesIdRequest, security: operations.GetBusinessLinesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBusinessLinesIdResponse>;
    /**
     * Update a business line
     *
     * @remarks
     * Updates a business line.
     */
    patchBusinessLinesId(req: operations.PatchBusinessLinesIdRequest, security: operations.PatchBusinessLinesIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchBusinessLinesIdResponse>;
    /**
     * Create a business line
     *
     * @remarks
     * Creates a business line.
     *
     * This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.
     */
    postBusinessLines(req: shared.BusinessLineInfoInput, security: operations.PostBusinessLinesSecurity, config?: AxiosRequestConfig): Promise<operations.PostBusinessLinesResponse>;
}
