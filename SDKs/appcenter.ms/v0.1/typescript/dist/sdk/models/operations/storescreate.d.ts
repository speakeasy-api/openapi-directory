import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoresCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoresCreateRequestBodyIntuneDetailsAppCategory extends SpeakeasyBase {
    /**
     * display name for the app category
     */
    name?: string;
}
export declare class StoresCreateRequestBodyIntuneDetailsSecretJson extends SpeakeasyBase {
    /**
     * the id token of user
     */
    idToken?: string;
    /**
     * the refresh token for user
     */
    refreshToken?: string;
    /**
     * the expiry of refresh token
     */
    refreshTokenExpiry?: string;
}
export declare class StoresCreateRequestBodyIntuneDetailsTargetAudience extends SpeakeasyBase {
    /**
     * display name for the target audience/group
     */
    name?: string;
}
export declare class StoresCreateRequestBodyIntuneDetails extends SpeakeasyBase {
    appCategory?: StoresCreateRequestBodyIntuneDetailsAppCategory;
    secretJson?: StoresCreateRequestBodyIntuneDetailsSecretJson;
    targetAudience?: StoresCreateRequestBodyIntuneDetailsTargetAudience;
    /**
     * tenant id of the intune store
     */
    tenantId?: string;
}
/**
 * track of the store. Can be production, alpha & beta for googleplay. Can be production, testflight-internal & testflight-external for Apple Store.
 */
export declare enum StoresCreateRequestBodyTrackEnum {
    Production = "production",
    Alpha = "alpha",
    Beta = "beta",
    TestflightInternal = "testflight-internal",
    TestflightExternal = "testflight-external"
}
/**
 * store Type
 */
export declare enum StoresCreateRequestBodyTypeEnum {
    Googleplay = "googleplay",
    Apple = "apple",
    Intune = "intune"
}
/**
 * ExternalStoreRequest
 */
export declare class StoresCreateRequestBody extends SpeakeasyBase {
    intuneDetails?: StoresCreateRequestBodyIntuneDetails;
    /**
     * name of the store. In case of googleplay, and Apple store this is fixed to Production.
     */
    name?: string;
    /**
     * Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
     */
    serviceConnectionId?: string;
    /**
     * track of the store. Can be production, alpha & beta for googleplay. Can be production, testflight-internal & testflight-external for Apple Store.
     */
    track?: StoresCreateRequestBodyTrackEnum;
    /**
     * store Type
     */
    type?: StoresCreateRequestBodyTypeEnum;
}
export declare class StoresCreateRequest extends SpeakeasyBase {
    /**
     * The store request
     */
    requestBody: StoresCreateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum StoresCreateDefaultApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error
 */
export declare class StoresCreateDefaultApplicationJSON extends SpeakeasyBase {
    code: StoresCreateDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class StoresCreate201ApplicationJSONIntuneDetailsAppCategory extends SpeakeasyBase {
    /**
     * ID for the category.
     */
    id?: string;
    /**
     * display name for the app category
     */
    name?: string;
}
export declare class StoresCreate201ApplicationJSONIntuneDetailsTargetAudience extends SpeakeasyBase {
    /**
     * ID for the target audience/group.
     */
    id?: string;
    /**
     * display name for the target audience/group
     */
    name?: string;
}
/**
 * Store details for intune
 */
export declare class StoresCreate201ApplicationJSONIntuneDetails extends SpeakeasyBase {
    appCategory?: StoresCreate201ApplicationJSONIntuneDetailsAppCategory;
    targetAudience?: StoresCreate201ApplicationJSONIntuneDetailsTargetAudience;
}
/**
 * Store track
 */
export declare enum StoresCreate201ApplicationJSONTrackEnum {
    Production = "production",
    Alpha = "alpha",
    Beta = "beta",
    TestflightInternal = "testflight-internal",
    TestflightExternal = "testflight-external"
}
/**
 * ExternalStoreResponse
 */
export declare class StoresCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * The ID of the principal that created the store.
     */
    createdBy?: string;
    /**
     * The type of the principal that created the store.
     */
    createdByPrincipalType?: string;
    /**
     * Store id
     */
    id?: string;
    /**
     * Store details for intune
     */
    intuneDetails?: StoresCreate201ApplicationJSONIntuneDetails;
    /**
     * Store Name
     */
    name?: string;
    /**
     * Id for the shared service connection. In case of Apple / GooglePlay stores, this connection will be used to connect to the Apple / Google stores in App Center.
     */
    serviceConnectionId?: string;
    /**
     * Store track
     */
    track?: StoresCreate201ApplicationJSONTrackEnum;
    /**
     * Store Type
     */
    type?: string;
}
export declare class StoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storesCreate201ApplicationJSONObject?: StoresCreate201ApplicationJSON;
    /**
     * Error
     */
    storesCreateDefaultApplicationJSONObject?: StoresCreateDefaultApplicationJSON;
}
