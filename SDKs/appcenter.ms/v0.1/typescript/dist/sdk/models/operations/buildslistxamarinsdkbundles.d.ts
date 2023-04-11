import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsListXamarinSDKBundlesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BuildsListXamarinSDKBundlesRequest extends SpeakeasyBase {
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
 * Bad Request
 */
export declare class BuildsListXamarinSDKBundlesDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * The Xamarin SDK bundle
 */
export declare class BuildsListXamarinSDKBundles200ApplicationJSON extends SpeakeasyBase {
    /**
     * If the SDK is latest stable
     */
    current?: boolean;
    /**
     * The Mono version
     */
    monoVersion?: string;
    /**
     * The Xamarin SDK version
     */
    sdkBundle?: string;
    /**
     * If the SDK is stable
     */
    stable?: boolean;
    /**
     * Specific for iOS SDK. A list of Xcode versions supported by current SDK version
     */
    xcodeVersions?: string[];
}
export declare class BuildsListXamarinSDKBundlesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsListXamarinSDKBundles200ApplicationJSONObjects?: BuildsListXamarinSDKBundles200ApplicationJSON[];
    /**
     * Bad Request
     */
    buildsListXamarinSDKBundlesDefaultApplicationJSONObject?: BuildsListXamarinSDKBundlesDefaultApplicationJSON;
}
