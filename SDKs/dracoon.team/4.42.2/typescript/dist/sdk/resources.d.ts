import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Client resources
 */
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Request list of subscription scopes
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Retrieve a list of subscription scopes.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of scopes is returned.
     *
     * ### Further Information:
     * None.
     */
    requestSubscriptionScopes(config?: AxiosRequestConfig): Promise<operations.RequestSubscriptionScopesResponse>;
    /**
     * Request user avatar
     *
     * @remarks
     * ### Description:
     * Get user avatar.
     *
     * ### Precondition:
     * Valid user ID and avatar UUID
     *
     * ### Postcondition:
     * Avatar is returned.
     *
     * ### Further Information:
     * None.
     */
    requestUserAvatar(req: operations.RequestUserAvatarRequest, config?: AxiosRequestConfig): Promise<operations.RequestUserAvatarResponse>;
}
