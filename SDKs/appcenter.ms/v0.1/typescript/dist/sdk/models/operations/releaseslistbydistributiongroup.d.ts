import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesListByDistributionGroupSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesListByDistributionGroupRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the distribution group.
     */
    distributionGroupName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ReleasesListByDistributionGroup404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * A distribution group can't be found.
 *
 * @remarks
 *
 */
export declare class ReleasesListByDistributionGroup404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesListByDistributionGroup404ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The release's origin
 */
export declare enum ReleasesListByDistributionGroup200ApplicationJSONOriginEnum {
    Hockeyapp = "hockeyapp",
    Appcenter = "appcenter"
}
/**
 * Response for getting a list of releases in a distribution group
 */
export declare class ReleasesListByDistributionGroup200ApplicationJSON extends SpeakeasyBase {
    /**
     * This value determines the whether a release currently is enabled or disabled.
     */
    enabled: boolean;
    /**
     * ID identifying this unique release.
     */
    id: number;
    /**
     * This value determines if a release is external or not.
     */
    isExternalBuild?: boolean;
    /**
     * A boolean which determines whether the release is a mandatory update or not.
     */
    mandatoryUpdate: boolean;
    /**
     * The release's origin
     */
    origin?: ReleasesListByDistributionGroup200ApplicationJSONOriginEnum;
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
export declare class ReleasesListByDistributionGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesListByDistributionGroup200ApplicationJSONObjects?: ReleasesListByDistributionGroup200ApplicationJSON[];
    /**
     * A distribution group can't be found.
     *
     * @remarks
     *
     */
    releasesListByDistributionGroup404ApplicationJSONObject?: ReleasesListByDistributionGroup404ApplicationJSON;
}
