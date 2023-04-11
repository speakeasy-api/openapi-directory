import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesGetLatestByDistributionGroupSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesGetLatestByDistributionGroupRequest extends SpeakeasyBase {
    /**
     * The name of the app
     */
    appName: string;
    /**
     * The name of the distribution group.
     */
    distributionGroupName: string;
    /**
     * The check if the request is from Install page
     */
    isInstallPage?: boolean;
    /**
     * The name of the app owner
     */
    ownerName: string;
    /**
     * Also supports the constant `latest`, which will return the latest release in the distribution group.
     */
    releaseId: string;
}
export declare enum ReleasesGetLatestByDistributionGroup501ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Requesting a specific release_id is not supported.
 *
 * @remarks
 *
 */
export declare class ReleasesGetLatestByDistributionGroup501ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetLatestByDistributionGroup501ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesGetLatestByDistributionGroup404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error Codes:
 *
 * @remarks
 * - `not_found` - Distribution group or the app doesn't exist
 * - `no_releases_for_app` - App has no releases.
 *
 */
export declare class ReleasesGetLatestByDistributionGroup404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetLatestByDistributionGroup404ApplicationJSONCodeEnum;
    message: string;
}
/**
 * Contains metadata about the build that produced the release being uploaded
 */
export declare class ReleasesGetLatestByDistributionGroup200ApplicationJSONBuild extends SpeakeasyBase {
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
export declare enum ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * Destination can be either store or group.
 */
export declare enum ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinationsDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * type of the distribution store currently stores type can be intune, googleplay or windows.
 */
export declare enum ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinationsTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay",
    Apple = "apple",
    None = "none"
}
/**
 * A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
 */
export declare class ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinations extends SpeakeasyBase {
    /**
     * Destination can be either store or group.
     */
    destinationType?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinationsDestinationTypeEnum;
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
    type?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinationsTypeEnum;
}
export declare class ReleasesGetLatestByDistributionGroup200ApplicationJSONDistributionGroups extends SpeakeasyBase {
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
export declare enum ReleasesGetLatestByDistributionGroup200ApplicationJSONDistributionStoresTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay",
    Apple = "apple",
    None = "none"
}
export declare class ReleasesGetLatestByDistributionGroup200ApplicationJSONDistributionStores extends SpeakeasyBase {
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
    type?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDistributionStoresTypeEnum;
}
/**
 * The release's origin
 */
export declare enum ReleasesGetLatestByDistributionGroup200ApplicationJSONOriginEnum {
    Hockeyapp = "hockeyapp",
    Appcenter = "appcenter"
}
/**
 * The type of the provisioning profile for the requested app version.
 */
export declare enum ReleasesGetLatestByDistributionGroup200ApplicationJSONProvisioningProfileTypeEnum {
    Adhoc = "adhoc",
    Enterprise = "enterprise",
    Other = "other"
}
/**
 * Details of an uploaded release
 */
export declare class ReleasesGetLatestByDistributionGroup200ApplicationJSON extends SpeakeasyBase {
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
    build?: ReleasesGetLatestByDistributionGroup200ApplicationJSONBuild;
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
    destinationType?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinationTypeEnum;
    /**
     * A list of distribution groups or stores.
     */
    destinations?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDestinations[];
    /**
     * The release's device family.
     */
    deviceFamily?: string;
    /**
     * OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
     */
    distributionGroups?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDistributionGroups[];
    /**
     * OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
     */
    distributionStores?: ReleasesGetLatestByDistributionGroup200ApplicationJSONDistributionStores[];
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
    origin?: ReleasesGetLatestByDistributionGroup200ApplicationJSONOriginEnum;
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
    provisioningProfileType?: ReleasesGetLatestByDistributionGroup200ApplicationJSONProvisioningProfileTypeEnum;
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
export declare class ReleasesGetLatestByDistributionGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesGetLatestByDistributionGroup200ApplicationJSONObject?: ReleasesGetLatestByDistributionGroup200ApplicationJSON;
    /**
     * Error Codes:
     *
     * @remarks
     * - `not_found` - Distribution group or the app doesn't exist
     * - `no_releases_for_app` - App has no releases.
     *
     */
    releasesGetLatestByDistributionGroup404ApplicationJSONObject?: ReleasesGetLatestByDistributionGroup404ApplicationJSON;
    /**
     * Requesting a specific release_id is not supported.
     *
     * @remarks
     *
     */
    releasesGetLatestByDistributionGroup501ApplicationJSONObject?: ReleasesGetLatestByDistributionGroup501ApplicationJSON;
}
