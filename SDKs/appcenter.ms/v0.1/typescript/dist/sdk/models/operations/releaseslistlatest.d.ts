import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesListLatestSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesListLatestRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Build information for the release
 *
 * @remarks
 *
 */
export declare class ReleasesListLatest200ApplicationJSONBuild extends SpeakeasyBase {
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
 * <b>store</b>: The release distributed to external stores and distribution_stores details will be returned. <br>
 *
 */
export declare enum ReleasesListLatest200ApplicationJSONDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * Destination can be either store or group.
 */
export declare enum ReleasesListLatest200ApplicationJSONDestinationsDestinationTypeEnum {
    Group = "group",
    Store = "store",
    Tester = "tester"
}
/**
 * type of the distribution store currently stores type can be intune, googleplay or windows.
 */
export declare enum ReleasesListLatest200ApplicationJSONDestinationsTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay",
    Apple = "apple",
    None = "none"
}
/**
 * A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
 */
export declare class ReleasesListLatest200ApplicationJSONDestinations extends SpeakeasyBase {
    /**
     * Destination can be either store or group.
     */
    destinationType?: ReleasesListLatest200ApplicationJSONDestinationsDestinationTypeEnum;
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
    type?: ReleasesListLatest200ApplicationJSONDestinationsTypeEnum;
}
export declare class ReleasesListLatest200ApplicationJSONDistributionGroups extends SpeakeasyBase {
    /**
     * ID identifying a unique distribution group.
     */
    id: string;
    /**
     * Is the containing release the latest one in this distribution group.
     */
    isLatest?: boolean;
    /**
     * A name identifying a unique distribution group.
     */
    name?: string;
}
/**
 * type of the distribution store currently stores type can be intune, googleplay or windows.
 */
export declare enum ReleasesListLatest200ApplicationJSONDistributionStoresTypeEnum {
    Intune = "intune",
    Googleplay = "googleplay",
    Apple = "apple",
    None = "none"
}
export declare class ReleasesListLatest200ApplicationJSONDistributionStores extends SpeakeasyBase {
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
    type?: ReleasesListLatest200ApplicationJSONDistributionStoresTypeEnum;
}
/**
 * The release's origin
 */
export declare enum ReleasesListLatest200ApplicationJSONOriginEnum {
    Hockeyapp = "hockeyapp",
    Appcenter = "appcenter"
}
/**
 * Basic information on a release
 */
export declare class ReleasesListLatest200ApplicationJSON extends SpeakeasyBase {
    /**
     * Build information for the release
     *
     * @remarks
     *
     */
    build?: ReleasesListLatest200ApplicationJSONBuild;
    /**
     * OBSOLETE. Will be removed in next version. The destination type.<br>
     *
     * @remarks
     * <b>group</b>: The release distributed to internal groups and distribution_groups details will be returned.<br>
     * <b>store</b>: The release distributed to external stores and distribution_stores details will be returned. <br>
     *
     */
    destinationType?: ReleasesListLatest200ApplicationJSONDestinationTypeEnum;
    /**
     * A list of distribution groups or stores.
     */
    destinations?: ReleasesListLatest200ApplicationJSONDestinations[];
    /**
     * OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
     */
    distributionGroups?: ReleasesListLatest200ApplicationJSONDistributionGroups[];
    /**
     * OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
     */
    distributionStores?: ReleasesListLatest200ApplicationJSONDistributionStores[];
    /**
     * This value determines the whether a release currently is enabled or disabled.
     */
    enabled: boolean;
    /**
     * The file extension of the main (user-uploaded) package file.
     */
    fileExtension?: string;
    /**
     * ID identifying this unique release.
     */
    id: number;
    /**
     * This value determines if a release is external or not.
     */
    isExternalBuild?: boolean;
    /**
     * The release's origin
     */
    origin?: ReleasesListLatest200ApplicationJSONOriginEnum;
    /**
     * The release's short version.<br>
     *
     * @remarks
     * For iOS: CFBundleShortVersionString from info.plist.<br>
     * For Android: android:versionName from AppManifest.xml.
     *
     */
    shortVersion: string;
    /**
     * UTC time in ISO 8601 format of the uploaded time.
     */
    uploadedAt: string;
    /**
     * The release's version.<br>
     *
     * @remarks
     * For iOS: CFBundleVersion from info.plist.<br>
     * For Android: android:versionCode from AppManifest.xml.
     *
     */
    version: string;
}
export declare class ReleasesListLatestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesListLatest200ApplicationJSONObjects?: ReleasesListLatest200ApplicationJSON[];
}
