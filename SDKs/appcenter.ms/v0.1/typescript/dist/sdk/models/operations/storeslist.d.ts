import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoresListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoresListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class StoresList200ApplicationJSONIntuneDetailsAppCategory extends SpeakeasyBase {
    /**
     * ID for the category.
     */
    id?: string;
    /**
     * display name for the app category
     */
    name?: string;
}
export declare class StoresList200ApplicationJSONIntuneDetailsTargetAudience extends SpeakeasyBase {
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
export declare class StoresList200ApplicationJSONIntuneDetails extends SpeakeasyBase {
    appCategory?: StoresList200ApplicationJSONIntuneDetailsAppCategory;
    targetAudience?: StoresList200ApplicationJSONIntuneDetailsTargetAudience;
}
/**
 * Store track
 */
export declare enum StoresList200ApplicationJSONTrackEnum {
    Production = "production",
    Alpha = "alpha",
    Beta = "beta",
    TestflightInternal = "testflight-internal",
    TestflightExternal = "testflight-external"
}
/**
 * ExternalStoreResponse
 */
export declare class StoresList200ApplicationJSON extends SpeakeasyBase {
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
    intuneDetails?: StoresList200ApplicationJSONIntuneDetails;
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
    track?: StoresList200ApplicationJSONTrackEnum;
    /**
     * Store Type
     */
    type?: string;
}
export declare class StoresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storesList200ApplicationJSONObjects?: StoresList200ApplicationJSON[];
}
