import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoresGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoresGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The name of the store
     */
    storeName: string;
}
export declare enum StoresGetDefaultApplicationJSONCodeEnum {
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
export declare class StoresGetDefaultApplicationJSON extends SpeakeasyBase {
    code: StoresGetDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class StoresGet200ApplicationJSONIntuneDetailsAppCategory extends SpeakeasyBase {
    /**
     * ID for the category.
     */
    id?: string;
    /**
     * display name for the app category
     */
    name?: string;
}
export declare class StoresGet200ApplicationJSONIntuneDetailsTargetAudience extends SpeakeasyBase {
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
export declare class StoresGet200ApplicationJSONIntuneDetails extends SpeakeasyBase {
    appCategory?: StoresGet200ApplicationJSONIntuneDetailsAppCategory;
    targetAudience?: StoresGet200ApplicationJSONIntuneDetailsTargetAudience;
}
/**
 * Store track
 */
export declare enum StoresGet200ApplicationJSONTrackEnum {
    Production = "production",
    Alpha = "alpha",
    Beta = "beta",
    TestflightInternal = "testflight-internal",
    TestflightExternal = "testflight-external"
}
/**
 * ExternalStoreResponse
 */
export declare class StoresGet200ApplicationJSON extends SpeakeasyBase {
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
    intuneDetails?: StoresGet200ApplicationJSONIntuneDetails;
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
    track?: StoresGet200ApplicationJSONTrackEnum;
    /**
     * Store Type
     */
    type?: string;
}
export declare class StoresGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storesGet200ApplicationJSONObject?: StoresGet200ApplicationJSON;
    /**
     * Error
     */
    storesGetDefaultApplicationJSONObject?: StoresGetDefaultApplicationJSON;
}
