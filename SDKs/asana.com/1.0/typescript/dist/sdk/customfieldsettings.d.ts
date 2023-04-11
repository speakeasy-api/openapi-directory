import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the `is_important` property determines some possible application-specific handling of that custom field.
 */
export declare class CustomFieldSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a portfolio's custom fields
     *
     * @remarks
     * Returns a list of all of the custom fields settings on a portfolio, in compact form.
     */
    getCustomFieldSettingsForPortfolio(req: operations.GetCustomFieldSettingsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldSettingsForPortfolioResponse>;
    /**
     * Get a project's custom fields
     *
     * @remarks
     * Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.
     */
    getCustomFieldSettingsForProject(req: operations.GetCustomFieldSettingsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldSettingsForProjectResponse>;
}
