import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum SharedconnectionConnectionsDefaultApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * bad_request: proper details are not provided for connection in body.
 *
 * @remarks
 *
 */
export declare class SharedconnectionConnectionsDefaultApplicationJSON extends SpeakeasyBase {
    code: SharedconnectionConnectionsDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * the type of the credential
 */
export declare enum SharedconnectionConnections200ApplicationJSONCredentialTypeEnum {
    Credentials = "credentials",
    Certificate = "certificate",
    Key = "key"
}
/**
 * service type of shared connection can be apple|gitlab|googleplay|jira
 */
export declare enum SharedconnectionConnections200ApplicationJSONServiceTypeEnum {
    Apple = "apple",
    Jira = "jira",
    Googleplay = "googleplay",
    Gitlab = "gitlab"
}
/**
 * SharedConnectionResponse
 */
export declare class SharedconnectionConnections200ApplicationJSON extends SpeakeasyBase {
    /**
     * the type of the credential
     */
    credentialType?: SharedconnectionConnections200ApplicationJSONCredentialTypeEnum;
    /**
     * display name of shared connection
     */
    displayName: string;
    /**
     * service type of shared connection can be apple|gitlab|googleplay|jira
     */
    serviceType: SharedconnectionConnections200ApplicationJSONServiceTypeEnum;
}
export declare class SharedconnectionConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    sharedconnectionConnections200ApplicationJSONObjects?: SharedconnectionConnections200ApplicationJSON[];
    /**
     * bad_request: proper details are not provided for connection in body.
     *
     * @remarks
     *
     */
    sharedconnectionConnectionsDefaultApplicationJSONObject?: SharedconnectionConnectionsDefaultApplicationJSON;
}
