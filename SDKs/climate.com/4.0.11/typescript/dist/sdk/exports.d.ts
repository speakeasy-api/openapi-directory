import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * General data export endpoints.
 */
export declare class Exports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the binary contents of a processed export request.
     *
     * @remarks
     * Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
     */
    fetchExportContentsById(req: operations.FetchExportContentsByIdRequest, security: operations.FetchExportContentsByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FetchExportContentsByIdResponse>;
    /**
     * Retrieve the status of an Export.
     *
     * @remarks
     * Check the status of an **Export** by ID.
     */
    fetchExportStatusById(req: operations.FetchExportStatusByIdRequest, security: operations.FetchExportStatusByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FetchExportStatusByIdResponse>;
    /**
     * Initiate a new export request.
     *
     * @remarks
     * Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.
     * The following `contentTypes` may be requested:
     *   * __application/vnd.climate.acrsi.geojson__ (Beta)
     *      Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner
     *      as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).
     *
     *      The export request definition must contain the following properties:
     *        * plantingStartDate
     *        * plantingEndDate
     *        * resourceOwnerId
     *
     *      Requires `exports:read` and `plantingActivitySummary:read` scope.
     *
     *   * __application/vnd.climate.harvest.geojson__
     *      Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner
     *      as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).
     *
     *      The export request definition must contain the following properties:
     *        * harvestStartDate
     *        * harvestEndDate
     *        * resourceOwnerId
     *
     *      Requires `exports:read` and `plantingActivitySummary:read` scope.
     */
    postExport(req: shared.Export, security: operations.PostExportSecurity, config?: AxiosRequestConfig): Promise<operations.PostExportResponse>;
}
