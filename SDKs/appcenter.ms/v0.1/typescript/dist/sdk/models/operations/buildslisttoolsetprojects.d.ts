import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsListToolsetProjectsSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The desired OS for the project scan; normally the same as the app OS
 */
export declare enum BuildsListToolsetProjectsOsEnum {
    IOS = "iOS",
    Android = "Android",
    Windows = "Windows",
    MacOS = "macOS"
}
/**
 * The desired platform for the project scan
 */
export declare enum BuildsListToolsetProjectsPlatformEnum {
    ObjectiveCSwift = "Objective-C-Swift",
    ReactNative = "React-Native",
    Xamarin = "Xamarin",
    Java = "Java",
    Uwp = "UWP"
}
export declare class BuildsListToolsetProjectsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The branch name
     */
    branch: string;
    /**
     * The depth of the repository to search for project files
     */
    maxSearchDepth?: number;
    /**
     * The desired OS for the project scan; normally the same as the app OS
     */
    os: BuildsListToolsetProjectsOsEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The desired platform for the project scan
     */
    platform: BuildsListToolsetProjectsPlatformEnum;
}
/**
 * Android signing config. Null if not specified
 */
export declare class BuildsListToolsetProjects200ApplicationJSONAndroidAndroidModulesBuildConfigurationsSigningConfig extends SpeakeasyBase {
    /**
     * Indicates if storeFile is specified in the signing configuration
     */
    hasStoreFile?: boolean;
}
export declare class BuildsListToolsetProjects200ApplicationJSONAndroidAndroidModulesBuildConfigurations extends SpeakeasyBase {
    /**
     * Name of build configuration (the same as a build type name)
     */
    name: string;
    /**
     * Android signing config. Null if not specified
     */
    signingConfig?: BuildsListToolsetProjects200ApplicationJSONAndroidAndroidModulesBuildConfigurationsSigningConfig;
}
export declare class BuildsListToolsetProjects200ApplicationJSONAndroidAndroidModules extends SpeakeasyBase {
    /**
     * The detected build configurations of the Android module
     */
    buildConfigurations?: BuildsListToolsetProjects200ApplicationJSONAndroidAndroidModulesBuildConfigurations[];
    /**
     * The detected build types of the Android module
     */
    buildTypes?: string[];
    /**
     * The detected build variants of the Android module (matrix of product flavor + build type (debug|release))
     */
    buildVariants?: string[];
    /**
     * Module contains bundle settings
     */
    hasBundle?: boolean;
    /**
     * Whether the module is at the root level of the project
     */
    isRoot?: boolean;
    /**
     * Name of the Android module
     */
    name: string;
    /**
     * The product flavors of the Android module
     */
    productFlavors?: string[];
}
export declare class BuildsListToolsetProjects200ApplicationJSONAndroid extends SpeakeasyBase {
    /**
     * Android Gradle modules
     */
    androidModules: BuildsListToolsetProjects200ApplicationJSONAndroidAndroidModules[];
    /**
     * The path of the Gradle wrapper
     */
    gradleWrapperPath?: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONJavascriptJavascriptSolutions extends SpeakeasyBase {
    /**
     * The path to the detected package.json
     */
    packageJsonPath: string;
    /**
     * Version of React Native from package.json files
     */
    reactNativeVersion?: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONJavascript extends SpeakeasyBase {
    /**
     * The React Native solutions detected
     */
    javascriptSolutions?: BuildsListToolsetProjects200ApplicationJSONJavascriptJavascriptSolutions[];
    /**
     * Paths for detected package.json files
     */
    packageJsonPaths: string[];
}
export declare class BuildsListToolsetProjects200ApplicationJSONTestcloudProjectsFrameworkProperties extends SpeakeasyBase {
    configurations?: string[];
}
export declare enum BuildsListToolsetProjects200ApplicationJSONTestcloudProjectsFrameworkTypeEnum {
    Appium = "Appium",
    Calabash = "Calabash",
    Espresso = "Espresso",
    UITest = "UITest",
    Generated = "Generated"
}
export declare class BuildsListToolsetProjects200ApplicationJSONTestcloudProjects extends SpeakeasyBase {
    frameworkProperties?: BuildsListToolsetProjects200ApplicationJSONTestcloudProjectsFrameworkProperties;
    frameworkType: BuildsListToolsetProjects200ApplicationJSONTestcloudProjectsFrameworkTypeEnum;
    /**
     * The path to the TestCloud project
     */
    path: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONTestcloud extends SpeakeasyBase {
    /**
     * The TestCloud projects detected
     */
    projects: BuildsListToolsetProjects200ApplicationJSONTestcloudProjects[];
}
export declare class BuildsListToolsetProjects200ApplicationJSONUwpUwpSolutions extends SpeakeasyBase {
    /**
     * The possible configurations detected for the UWP solution
     */
    configurations: string[];
    /**
     * The path to the UWP solution
     */
    path: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONUwp extends SpeakeasyBase {
    /**
     * The UWP solutions detected
     */
    uwpSolutions: BuildsListToolsetProjects200ApplicationJSONUwpUwpSolutions[];
}
export declare class BuildsListToolsetProjects200ApplicationJSONXamarinXamarinSolutions extends SpeakeasyBase {
    /**
     * Solution configurations
     */
    configurations: string[];
    /**
     * Solution default configuration
     */
    defaultConfiguration?: string;
    /**
     * Path to solution
     */
    path: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONXamarin extends SpeakeasyBase {
    /**
     * Xamarin solutions for the toolset
     */
    xamarinSolutions: BuildsListToolsetProjects200ApplicationJSONXamarinXamarinSolutions[];
}
/**
 * App extension information
 */
export declare class BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainersAppExtensionTargets extends SpeakeasyBase {
    /**
     * App extension name
     */
    name: string;
    /**
     * App extension bundle identifier
     */
    targetBundleIdentifier: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainersSharedSchemesArchiveProject extends SpeakeasyBase {
    /**
     * The Id of the target to archive
     */
    archiveTargetId: string;
    /**
     * The project to archive container name
     */
    projectName: string;
    /**
     * Full path of the target project
     */
    projectPath?: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainersSharedSchemes extends SpeakeasyBase {
    /**
     * Build configuration set in Archive action
     */
    archiveConfiguration?: string;
    archiveProject?: BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainersSharedSchemesArchiveProject;
    /**
     * Does scheme have a test action?
     */
    hasTestAction: boolean;
    /**
     * Scheme name
     */
    name: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainers extends SpeakeasyBase {
    /**
     * Information regarding project app extensions, if present
     */
    appExtensionTargets?: BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainersAppExtensionTargets[];
    /**
     * Path to Carthage file, if present
     */
    cartfilePath?: string;
    /**
     * Path to project
     */
    path: string;
    /**
     * Path to CocoaPods file, if present
     */
    podfilePath?: string;
    /**
     * Project schemes
     */
    sharedSchemes: BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainersSharedSchemes[];
    /**
     * Related projects paths for xcworkspace
     */
    workspaceProjectPaths?: string;
    /**
     * repo object Id of the pbxproject
     */
    xcodeProjectSha?: string;
}
export declare class BuildsListToolsetProjects200ApplicationJSONXcode extends SpeakeasyBase {
    /**
     * The Xcode scheme containers
     */
    xcodeSchemeContainers: BuildsListToolsetProjects200ApplicationJSONXcodeXcodeSchemeContainers[];
}
/**
 * A collection of projects for each type of toolset
 */
export declare class BuildsListToolsetProjects200ApplicationJSON extends SpeakeasyBase {
    android?: BuildsListToolsetProjects200ApplicationJSONAndroid;
    /**
     * A collection of detected pre/post buildscripts for current platform toolset
     */
    buildscripts?: any;
    /**
     * The commit hash of the analyzed commit
     */
    commit?: string;
    javascript?: BuildsListToolsetProjects200ApplicationJSONJavascript;
    testcloud?: BuildsListToolsetProjects200ApplicationJSONTestcloud;
    uwp?: BuildsListToolsetProjects200ApplicationJSONUwp;
    xamarin?: BuildsListToolsetProjects200ApplicationJSONXamarin;
    xcode?: BuildsListToolsetProjects200ApplicationJSONXcode;
}
export declare class BuildsListToolsetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsListToolsetProjects200ApplicationJSONObject?: BuildsListToolsetProjects200ApplicationJSON;
}
