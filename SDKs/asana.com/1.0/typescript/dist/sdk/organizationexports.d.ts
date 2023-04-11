import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An `organization_export` object represents a request to export the complete data of an organization in JSON format.
 *
 * @remarks
 *
 * To export an organization using this API:
 *
 * * Create an `organization_export`
 *   [request](/docs/create-an-organization-export-request)
 *   and store the ID that is returned.
 * * Request the `organization_export` every few minutes, until the
 *   `state` field contains ‘finished’.
 * * Download the file located at the URL in the `download_url` field. * Exports can take a long time, from several minutes to a few hours
 *   for large organizations.
 *
 *
 * *Note: These endpoints are only available to [Service Accounts](https://asana.com/guide/help/premium/service-accounts) of an [Enterprise](https://asana.com/enterprise) organization.*
 */
export declare class OrganizationExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an organization export request
     *
     * @remarks
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
     */
    createOrganizationExport(req: operations.CreateOrganizationExportRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationExportResponse>;
    /**
     * Get details on an org export request
     *
     * @remarks
     * Returns details of a previously-requested Organization export.
     */
    getOrganizationExport(req: operations.GetOrganizationExportRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationExportResponse>;
}
