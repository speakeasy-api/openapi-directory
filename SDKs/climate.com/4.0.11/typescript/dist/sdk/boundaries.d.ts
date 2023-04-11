import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Field Boundary data endpoints.
 */
export declare class Boundaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve Boundaries in batch
     *
     * @remarks
     * Retrieve multiple **Boundaries** (up to 10 per request).
     */
    fetchBoundaries(req: shared.BoundariesQuery, security: operations.FetchBoundariesSecurity, config?: AxiosRequestConfig): Promise<operations.FetchBoundariesResponse>;
    /**
     * Retrieve a Boundary by ID
     *
     * @remarks
     * Retrieve a **Boundary** by ID.
     */
    fetchBoundaryById(req: operations.FetchBoundaryByIdRequest, security: operations.FetchBoundaryByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FetchBoundaryByIdResponse>;
    /**
     * Upload a boundary
     *
     * @remarks
     * Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
     * This is restricted to callers with **boundaries:write** scope.
     * To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.
     */
    uploadBoundary(req: shared.BoundaryUpload, security: operations.UploadBoundarySecurity, config?: AxiosRequestConfig): Promise<operations.UploadBoundaryResponse>;
}
