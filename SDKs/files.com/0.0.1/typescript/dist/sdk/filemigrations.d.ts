import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about file_migrations
 */
export declare class FileMigrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show File Migration
     *
     * @remarks
     * Show File Migration
     */
    getFileMigrationsId(req: operations.GetFileMigrationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFileMigrationsIdResponse>;
}
