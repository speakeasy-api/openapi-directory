import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Import {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Import exported data
     *
     * @remarks
     * This endpoint allows you to import your exported Postman data.
     * For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>
     *
     * On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.
     *
     * **Note**: Refer to examples for different scenarios.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
     */
    importExportedData(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ImportExportedDataResponse>;
    /**
     * Import external API specification
     *
     * @remarks
     * This endpoint allows you to import external API specifications into Postman.
     *
     * Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.
     *
     * On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.
     *
     * Supported `type`s:
     *
     * - string
     * - json
     * - file
     *
     * The `input` parameter should be defined based on the `type`.
     *
     * > To import a file, request body must be form-data with `type` param set to `file`.
     *
     * **Note**: Refer to examples for different scenarios.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
     */
    importExternalApiSpecification(req: operations.ImportExternalApiSpecificationRequestBody, config?: AxiosRequestConfig): Promise<operations.ImportExternalApiSpecificationResponse>;
}
