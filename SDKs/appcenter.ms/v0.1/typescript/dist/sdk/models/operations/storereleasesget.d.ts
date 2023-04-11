import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreReleasesGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreReleasesGetRequest extends SpeakeasyBase {
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
    releaseId: string;
    /**
     * The name of the store
     */
    storeName: string;
}
export declare enum StoreReleasesGetDefaultApplicationJSONCodeEnum {
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
export declare class StoreReleasesGetDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreReleasesGetDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * type of the distribution store currently stores type can be intune or googleplay.
 */
export declare enum StoreReleasesGet200ApplicationJSONDistributionStoresTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay"
}
export declare class StoreReleasesGet200ApplicationJSONDistributionStores extends SpeakeasyBase {
    /**
     * ID identifying a unique distribution store.
     */
    id?: string;
    /**
     * A name identifying a unique distribution store.
     */
    name?: string;
    /**
     * publishing status of the release in the store.
     */
    publishingStatus?: string;
    /**
     * type of the distribution store currently stores type can be intune or googleplay.
     */
    type?: StoreReleasesGet200ApplicationJSONDistributionStoresTypeEnum;
}
/**
 * The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
 */
export declare enum StoreReleasesGet200ApplicationJSONInstallUrlEnum {
    Group = "group",
    Store = "store"
}
/**
 * OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.</br>
 *
 * @remarks
 * The release state.<br>
 * <b>available</b>: The uploaded release has been distributed.<br>
 * <b>unavailable</b>: The uploaded release is not visible to the user. <br>
 *
 */
export declare enum StoreReleasesGet200ApplicationJSONStatusEnum {
    Available = "available",
    Unavailable = "unavailable"
}
/**
 * Details of an uploaded release
 */
export declare class StoreReleasesGet200ApplicationJSON extends SpeakeasyBase {
    /**
     * The release's minimum required Android API level.
     */
    androidMinApiLevel?: string;
    /**
     * The app's display name.
     */
    appDisplayName?: string;
    /**
     * The app's name (extracted from the uploaded release).
     */
    appName?: string;
    /**
     * The identifier of the apps bundle.
     */
    bundleIdentifier?: string;
    /**
     * a list of distribution stores that are associated with this release.
     */
    distributionStores?: StoreReleasesGet200ApplicationJSONDistributionStores[];
    /**
     * The URL that hosts the binary for this release.
     */
    downloadUrl?: string;
    /**
     * MD5 checksum of the release binary.
     */
    fingerprint?: string;
    /**
     * ID identifying this unique release.
     */
    id?: number;
    /**
     * The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
     */
    installUrl?: StoreReleasesGet200ApplicationJSONInstallUrlEnum;
    /**
     * The release's minimum required operating system.
     */
    minOs?: string;
    /**
     * The release's release notes.
     */
    releaseNotes?: string;
    /**
     * The release's short version.<br>
     *
     * @remarks
     * For iOS: CFBundleShortVersionString from info.plist.
     * For Android: android:versionName from AppManifest.xml.
     *
     */
    shortVersion?: string;
    /**
     * The release's size in bytes.
     */
    size?: number;
    /**
     * OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.</br>
     *
     * @remarks
     * The release state.<br>
     * <b>available</b>: The uploaded release has been distributed.<br>
     * <b>unavailable</b>: The uploaded release is not visible to the user. <br>
     *
     */
    status?: StoreReleasesGet200ApplicationJSONStatusEnum;
    /**
     * UTC time in ISO 8601 format of the uploaded time.
     */
    uploadedAt?: string;
    /**
     * The release's version.<br>
     *
     * @remarks
     * For iOS: CFBundleVersion from info.plist.
     * For Android: android:versionCode from AppManifest.xml.
     *
     */
    version?: string;
}
export declare class StoreReleasesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storeReleasesGet200ApplicationJSONObjects?: StoreReleasesGet200ApplicationJSON[];
    /**
     * Error
     */
    storeReleasesGetDefaultApplicationJSONObject?: StoreReleasesGetDefaultApplicationJSON;
}
