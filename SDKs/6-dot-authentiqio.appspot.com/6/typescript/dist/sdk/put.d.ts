import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Put {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * keyBind - Update Authentiq ID by replacing the object.
     *
     * v4: `JWT(sub,email,phone)` to bind email/phone hash;
     *
     * v5: POST issuer-signed email & phone scopes
     * and PUT to update registration `JWT(sub, pk, devtoken, ...)`
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    keyBind(req: operations.KeyBindRequest, config?: AxiosRequestConfig): Promise<operations.KeyBindResponse>;
    /**
     * signUpdate - authority updates a JWT with its signature
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    signUpdate(req: operations.SignUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SignUpdateResponse>;
}
