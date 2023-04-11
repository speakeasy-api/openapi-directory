import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreReleasesListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreReleasesListRequest extends SpeakeasyBase {
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
export declare enum StoreReleasesListDefaultApplicationJSONCodeEnum {
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
export declare class StoreReleasesListDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreReleasesListDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * Destination for this release.
 */
export declare enum StoreReleasesList200ApplicationJSONDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * A type identifying the type of distribution store.
 */
export declare enum StoreReleasesList200ApplicationJSONDistributionStoresTypeEnum {
    Googleplay = "googleplay",
    Intune = "intune",
    Apple = "apple"
}
export declare class StoreReleasesList200ApplicationJSONDistributionStores extends SpeakeasyBase {
    /**
     * ID identifying a unique distribution store.
     */
    id?: string;
    /**
     * Is the containing release the latest one in this distribution store.
     */
    isLatest?: boolean;
    /**
     * A name identifying a unique distribution store.
     */
    name?: string;
    /**
     * A status identifying the status of release in the distribution store.
     */
    publishingStatus?: string;
    /**
     * A type identifying the type of distribution store.
     */
    type?: StoreReleasesList200ApplicationJSONDistributionStoresTypeEnum;
}
/**
 * Basic information on a release
 */
export declare class StoreReleasesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * Destination for this release.
     */
    destinationType?: StoreReleasesList200ApplicationJSONDestinationTypeEnum;
    /**
     * a list of distribution stores that are associated with this release.
     */
    distributionStores?: StoreReleasesList200ApplicationJSONDistributionStores[];
    /**
     * ID identifying this unique release.
     */
    id?: number;
    /**
     * The release's short version.
     *
     * @remarks
     * For iOS: CFBundleShortVersionString from info.plist.
     * For Android: android:versionName from AppManifest.xml.
     *
     */
    shortVersion?: string;
    /**
     * UTC time in ISO 8601 format of the uploaded time.
     */
    uploadedAt?: string;
    /**
     * The release's version.
     *
     * @remarks
     * For iOS: CFBundleVersion from info.plist.
     * For Android: android:versionCode from AppManifest.xml.
     *
     */
    version?: string;
}
export declare class StoreReleasesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storeReleasesList200ApplicationJSONObjects?: StoreReleasesList200ApplicationJSON[];
    /**
     * Error
     */
    storeReleasesListDefaultApplicationJSONObject?: StoreReleasesListDefaultApplicationJSON;
}
