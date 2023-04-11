import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProfileImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * A Users or organizations profile image
     *
     * @remarks
     * This endpoint allows the client to retrieve a user or organization profile image information by its
     *         corresponding username.
     */
    getProfileImage(req: operations.GetProfileImageRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileImageResponse>;
}
