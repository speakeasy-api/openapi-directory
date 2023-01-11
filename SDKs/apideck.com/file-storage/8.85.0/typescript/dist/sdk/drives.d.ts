import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Drives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * drivesAdd - Create Drive
     *
     * Create Drive
    **/
    drivesAdd(req: operations.DrivesAddRequest, config?: AxiosRequestConfig): Promise<operations.DrivesAddResponse>;
    /**
     * drivesAll - List Drives
     *
     * List Drives
    **/
    drivesAll(req: operations.DrivesAllRequest, config?: AxiosRequestConfig): Promise<operations.DrivesAllResponse>;
    /**
     * drivesDelete - Delete Drive
     *
     * Delete Drive
    **/
    drivesDelete(req: operations.DrivesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DrivesDeleteResponse>;
    /**
     * drivesOne - Get Drive
     *
     * Get Drive
    **/
    drivesOne(req: operations.DrivesOneRequest, config?: AxiosRequestConfig): Promise<operations.DrivesOneResponse>;
    /**
     * drivesUpdate - Update Drive
     *
     * Update Drive
    **/
    drivesUpdate(req: operations.DrivesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DrivesUpdateResponse>;
}
