import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesGetLatestByHashSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesGetLatestByHashRequest extends SpeakeasyBase {
    /**
     * The secret of the target application
     */
    appSecret: string;
    /**
     * The hash of the release or 'latest' to get the latest release from all the distribution groups assigned to the current user.
     */
    releaseHash: string;
    /**
     * When passing `udid` in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms.
     */
    udid?: string;
}
export declare enum ReleasesGetLatestByHash404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error codes:
 *
 * @remarks
 * - `not_found` - A release or an app can't be found.
 * - `no_releases_for_user` - No releases available for that user (will only be returned when `release_hash` is `latest`)
 *
 */
export declare class ReleasesGetLatestByHash404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetLatestByHash404ApplicationJSONCodeEnum;
    message: string;
}
/**
 * Contains metadata about the build that produced the release being uploaded
 */
export declare class ReleasesGetLatestByHash200ApplicationJSONBuild extends SpeakeasyBase {
    /**
     * The branch name of the build producing the release
     */
    branchName?: string;
    /**
     * The commit hash of the build producing the release
     */
    commitHash?: string;
    /**
     * The commit message of the build producing the release
     */
    commitMessage?: string;
}
/**
 * OBSOLETE. Will be removed in next version. The destination type.<br>
 *
 * @remarks
 * <b>group</b>: The release distributed to internal groups and distribution_groups details will be returned.<br>
 * <b>store</b>: The release distributed to external stores and distribution_stores details will be returned.<br>
 * <b>tester</b>: The release distributed testers details will be returned.<br>
 *
 */
export declare enum ReleasesGetLatestByHash200ApplicationJSONDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * Destination can be either store or group.
 */
export declare enum ReleasesGetLatestByHash200ApplicationJSONDestinationsDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * type of the distribution store currently stores type can be intune, googleplay or windows.
 */
export declare enum ReleasesGetLatestByHash200ApplicationJSONDestinationsTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay",
    Apple = "apple",
    None = "none"
}
/**
 * A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
 */
export declare class ReleasesGetLatestByHash200ApplicationJSONDestinations extends SpeakeasyBase {
    /**
     * Destination can be either store or group.
     */
    destinationType?: ReleasesGetLatestByHash200ApplicationJSONDestinationsDestinationTypeEnum;
    /**
     * Display name for the group or tester
     */
    displayName?: string;
    /**
     * ID identifying a unique distribution store.
     */
    id: string;
    /**
     * Is the containing release the latest one in this distribution store.
     */
    isLatest?: boolean;
    /**
     * A name identifying a unique distribution store.
     */
    name?: string;
    /**
     * publishing status of the release in the store.
     */
    publishingStatus?: string;
    /**
     * type of the distribution store currently stores type can be intune, googleplay or windows.
     */
    type?: ReleasesGetLatestByHash200ApplicationJSONDestinationsTypeEnum;
}
export declare class ReleasesGetLatestByHash200ApplicationJSONDistributionGroups extends SpeakeasyBase {
    /**
     * ID identifying a unique distribution group.
     */
    id: string;
    /**
     * A name identifying a unique distribution group.
     */
    name?: string;
}
/**
 * type of the distribution store currently stores type can be intune, googleplay or windows.
 */
export declare enum ReleasesGetLatestByHash200ApplicationJSONDistributionStoresTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay",
    Apple = "apple",
    None = "none"
}
export declare class ReleasesGetLatestByHash200ApplicationJSONDistributionStores extends SpeakeasyBase {
    /**
     * ID identifying a unique distribution store.
     */
    id: string;
    /**
     * A name identifying a unique distribution store.
     */
    name?: string;
    /**
     * publishing status of the release in the store.
     */
    publishingStatus?: string;
    /**
     * type of the distribution store currently stores type can be intune, googleplay or windows.
     */
    type?: ReleasesGetLatestByHash200ApplicationJSONDistributionStoresTypeEnum;
}
/**
 * The release's origin
 */
export declare enum ReleasesGetLatestByHash200ApplicationJSONOriginEnum {
    Hockeyapp = "hockeyapp",
    Appcenter = "appcenter"
}
/**
 * The type of the provisioning profile for the requested app version.
 */
export declare enum ReleasesGetLatestByHash200ApplicationJSONProvisioningProfileTypeEnum {
    Adhoc = "adhoc",
    Enterprise = "enterprise",
    Other = "other"
}
/**
 * Details of an uploaded release
 */
export declare class ReleasesGetLatestByHash200ApplicationJSON extends SpeakeasyBase {
    /**
     * The release's minimum required Android API level.
     */
    androidMinApiLevel?: string;
    /**
     * The app's display name.
     */
    appDisplayName: string;
    /**
     * A URL to the app's icon.
     */
    appIconUrl: string;
    /**
     * The app's name (extracted from the uploaded release).
     */
    appName: string;
    /**
     * The app's OS.
     */
    appOs?: string;
    /**
     * Contains metadata about the build that produced the release being uploaded
     */
    build?: ReleasesGetLatestByHash200ApplicationJSONBuild;
    /**
     * The identifier of the apps bundle.
     */
    bundleIdentifier?: string;
    /**
     * In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
     */
    canResign?: boolean;
    /**
     * OBSOLETE. Will be removed in next version. The destination type.<br>
     *
     * @remarks
     * <b>group</b>: The release distributed to internal groups and distribution_groups details will be returned.<br>
     * <b>store</b>: The release distributed to external stores and distribution_stores details will be returned.<br>
     * <b>tester</b>: The release distributed testers details will be returned.<br>
     *
     */
    destinationType?: ReleasesGetLatestByHash200ApplicationJSONDestinationTypeEnum;
    /**
     * A list of distribution groups or stores.
     */
    destinations?: ReleasesGetLatestByHash200ApplicationJSONDestinations[];
    /**
     * The release's device family.
     */
    deviceFamily?: string;
    /**
     * OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
     */
    distributionGroups?: ReleasesGetLatestByHash200ApplicationJSONDistributionGroups[];
    /**
     * OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
     */
    distributionStores?: ReleasesGetLatestByHash200ApplicationJSONDistributionStores[];
    /**
     * The URL that hosts the binary for this release.
     */
    downloadUrl?: string;
    /**
     * This value determines the whether a release currently is enabled or disabled.
     */
    enabled: boolean;
    /**
     * MD5 checksum of the release binary.
     */
    fingerprint?: string;
    /**
     * ID identifying this unique release.
     */
    id: number;
    /**
     * The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
     */
    installUrl?: string;
    /**
     * This value determines if a release is external or not.
     */
    isExternalBuild?: boolean;
    /**
     * A flag that determines whether the release's provisioning profile is still extracted or not.
     */
    isProvisioningProfileSyncing?: boolean;
    /**
     * In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
     */
    isUdidProvisioned?: boolean;
    /**
     * The release's minimum required operating system.
     */
    minOs?: string;
    /**
     * The release's origin
     */
    origin?: ReleasesGetLatestByHash200ApplicationJSONOriginEnum;
    /**
     * Hashes for the packages.
     */
    packageHashes?: string[];
    /**
     * expiration date of provisioning profile in UTC format.
     */
    provisioningProfileExpiryDate?: string;
    /**
     * The release's provisioning profile name.
     */
    provisioningProfileName?: string;
    /**
     * The type of the provisioning profile for the requested app version.
     */
    provisioningProfileType?: ReleasesGetLatestByHash200ApplicationJSONProvisioningProfileTypeEnum;
    /**
     * The release's release notes.
     */
    releaseNotes?: string;
    /**
     * The URL that hosts the secondary binary for this release, such as the apk file for aab releases.
     */
    secondaryDownloadUrl?: string;
    /**
     * The release's short version.<br>
     *
     * @remarks
     * For iOS: CFBundleShortVersionString from info.plist.
     * For Android: android:versionName from AppManifest.xml.
     *
     */
    shortVersion: string;
    /**
     * The release's size in bytes.
     */
    size?: number;
    /**
     * Status of the release.
     */
    status?: string;
    /**
     * UTC time in ISO 8601 format of the uploaded time.
     */
    uploadedAt: string;
    /**
     * The release's version.<br>
     *
     * @remarks
     * For iOS: CFBundleVersion from info.plist.
     * For Android: android:versionCode from AppManifest.xml.
     *
     */
    version: string;
}
export declare class ReleasesGetLatestByHashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If called with a specific `release_hash` return the app's 'display_name'' and 'buildIdentifier'. If 'release_hash' is 'latest' return the full release details of the latest release that was distributed to the current user (from all the distribution groups).
     */
    releasesGetLatestByHash200ApplicationJSONObject?: ReleasesGetLatestByHash200ApplicationJSON;
    /**
     * Error codes:
     *
     * @remarks
     * - `not_found` - A release or an app can't be found.
     * - `no_releases_for_user` - No releases available for that user (will only be returned when `release_hash` is `latest`)
     *
     */
    releasesGetLatestByHash404ApplicationJSONObject?: ReleasesGetLatestByHash404ApplicationJSON;
}
