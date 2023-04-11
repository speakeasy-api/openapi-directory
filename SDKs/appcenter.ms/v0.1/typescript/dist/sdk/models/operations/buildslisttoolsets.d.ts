import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsListToolsetsSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Toolset name
 */
export declare enum BuildsListToolsetsToolsEnum {
    Xamarin = "xamarin",
    Xcode = "xcode",
    Node = "node"
}
export declare class BuildsListToolsetsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Toolset name
     */
    tools?: BuildsListToolsetsToolsEnum;
}
/**
 * Bad Request
 */
export declare class BuildsListToolsetsDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * The Node version
 */
export declare class BuildsListToolsets200ApplicationJSONNode extends SpeakeasyBase {
    /**
     * If the Node version is default for AppCenter
     */
    current?: boolean;
    /**
     * The version name
     */
    name?: string;
}
/**
 * The Xamarin SDK bundle
 */
export declare class BuildsListToolsets200ApplicationJSONXamarin extends SpeakeasyBase {
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
/**
 * The Xcode version
 */
export declare class BuildsListToolsets200ApplicationJSONXcode extends SpeakeasyBase {
    /**
     * If the Xcode is latest stable
     */
    current?: boolean;
    /**
     * The version name
     */
    name?: string;
}
/**
 * Set of toolsets available for app
 */
export declare class BuildsListToolsets200ApplicationJSON extends SpeakeasyBase {
    /**
     * A list of Node versions
     */
    node?: BuildsListToolsets200ApplicationJSONNode[];
    /**
     * A list of Xamarin SDK bundles
     */
    xamarin?: BuildsListToolsets200ApplicationJSONXamarin[];
    /**
     * A list of Xcode versions
     */
    xcode?: BuildsListToolsets200ApplicationJSONXcode[];
}
export declare class BuildsListToolsetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsListToolsets200ApplicationJSONObject?: BuildsListToolsets200ApplicationJSON;
    /**
     * Bad Request
     */
    buildsListToolsetsDefaultApplicationJSONObject?: BuildsListToolsetsDefaultApplicationJSON;
}
