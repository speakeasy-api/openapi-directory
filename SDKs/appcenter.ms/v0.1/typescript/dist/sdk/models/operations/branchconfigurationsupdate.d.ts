import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BranchConfigurationsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum BranchConfigurationsUpdateRequestBodyArtifactVersioningBuildNumberFormatEnum {
    BuildId = "buildId",
    Timestamp = "timestamp"
}
/**
 * The versioning configuration for artifacts built for this branch
 */
export declare class BranchConfigurationsUpdateRequestBodyArtifactVersioning extends SpeakeasyBase {
    buildNumberFormat?: BranchConfigurationsUpdateRequestBodyArtifactVersioningBuildNumberFormatEnum;
}
/**
 * Build configuration for Android projects
 */
export declare class BranchConfigurationsUpdateRequestBodyToolsetsAndroid extends SpeakeasyBase {
    /**
     * Whether to apply automatic signing or not
     */
    automaticSigning?: boolean;
    /**
     * The Android build variant to build
     */
    buildVariant?: string;
    /**
     * Path to the Gradle wrapper script
     */
    gradleWrapperPath?: string;
    /**
     * Whether it is the root module or not
     */
    isRoot?: boolean;
    /**
     * The key alias
     */
    keyAlias?: string;
    /**
     * The key password
     */
    keyPassword?: string;
    /**
     * The keystore encoded value
     */
    keystoreEncoded?: string;
    /**
     * The name of the keystore file
     */
    keystoreFilename?: string;
    /**
     * The password of the keystore
     */
    keystorePassword?: string;
    /**
     * The Gradle module to build
     */
    module?: string;
    /**
     * Whether to run lint checks during the build (default)
     */
    runLint?: boolean;
    /**
     * Whether to run unit tests during the build (default)
     */
    runTests?: boolean;
}
/**
 * Build configuration when React Native, or other JavaScript tech, is part of the build steps
 */
export declare class BranchConfigurationsUpdateRequestBodyToolsetsJavascript extends SpeakeasyBase {
    /**
     * Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
     */
    packageJsonPath?: string;
    /**
     * Version of React Native from package.json files
     */
    reactNativeVersion?: string;
    /**
     * Whether to run Jest unit tests, via npm test, during the build
     */
    runTests?: boolean;
}
/**
 * Build configuration for Xamarin projects
 */
export declare class BranchConfigurationsUpdateRequestBodyToolsetsXamarin extends SpeakeasyBase {
    args?: string;
    configuration?: string;
    isSimBuild?: boolean;
    monoVersion?: string;
    p12File?: string;
    p12Pwd?: string;
    provProfile?: string;
    sdkBundle?: string;
    slnPath?: string;
    /**
     * Symlink of the SDK Bundle and Mono installation.
     *
     * @remarks
     * The build will use the associated Mono bundled with related Xamarin SDK. If both symlink and monoVersion or sdkBundle are passed, the symlink is taking precedence. If non-existing symlink is passed, the current stable Mono version will be configured for building.
     *
     */
    symlink?: string;
}
/**
 * Provisioning profile fetch and store information
 */
export declare class BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles extends SpeakeasyBase {
    /**
     * File id from secure file storage
     */
    fileId?: string;
    /**
     * Name of uploaded provisioning profile
     */
    fileName?: string;
    /**
     * Target the provisioning profile is used to sign
     */
    targetBundleIdentifier?: string;
    /**
     * Upload id to App Center File Upload Store
     */
    uploadId?: string;
}
/**
 * Build configuration when Xcode is part of the build steps
 */
export declare class BranchConfigurationsUpdateRequestBodyToolsetsXcode extends SpeakeasyBase {
    appExtensionProvisioningProfileFiles?: BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles[];
    /**
     * The build configuration of the target to archive
     */
    archiveConfiguration?: string;
    automaticSigning?: boolean;
    /**
     * Path to Carthage file, if present
     */
    cartfilePath?: string;
    certificateEncoded?: string;
    certificateFileId?: string;
    certificateFilename?: string;
    certificatePassword?: string;
    certificateUploadId?: string;
    /**
     * Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
     *
     * @remarks
     * By default new build system is used if workspace setting is not committed to the repository. Only used for iOS React Native app, with Xcode 10.
     *
     */
    forceLegacyBuildSystem?: boolean;
    /**
     * Path to CococaPods file, if present
     */
    podfilePath?: string;
    /**
     * Xcode project/workspace path
     */
    projectOrWorkspacePath?: string;
    provisioningProfileEncoded?: string;
    provisioningProfileFileId?: string;
    provisioningProfileFilename?: string;
    provisioningProfileUploadId?: string;
    scheme?: string;
    /**
     * The target id of the selected scheme to archive
     */
    targetToArchive?: string;
    teamId?: string;
    /**
     * The selected pbxproject hash to the repositroy
     */
    xcodeProjectSha?: string;
    /**
     * Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
     */
    xcodeVersion?: string;
}
/**
 * The branch build configuration for each toolset
 */
export declare class BranchConfigurationsUpdateRequestBodyToolsets extends SpeakeasyBase {
    /**
     * Build configuration for Android projects
     */
    android?: BranchConfigurationsUpdateRequestBodyToolsetsAndroid;
    /**
     * Build configuration when React Native, or other JavaScript tech, is part of the build steps
     */
    javascript?: BranchConfigurationsUpdateRequestBodyToolsetsJavascript;
    /**
     * Build configuration for Xamarin projects
     */
    xamarin?: BranchConfigurationsUpdateRequestBodyToolsetsXamarin;
    /**
     * Build configuration when Xcode is part of the build steps
     */
    xcode?: BranchConfigurationsUpdateRequestBodyToolsetsXcode;
}
export declare enum BranchConfigurationsUpdateRequestBodyTriggerEnum {
    Continous = "continous",
    Continuous = "continuous",
    Manual = "manual"
}
/**
 * The branch build configuration
 */
export declare class BranchConfigurationsUpdateRequestBody extends SpeakeasyBase {
    /**
     * The versioning configuration for artifacts built for this branch
     */
    artifactVersioning?: BranchConfigurationsUpdateRequestBodyArtifactVersioning;
    badgeIsEnabled?: boolean;
    /**
     * A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
     */
    cloneFromBranch?: string;
    signed?: boolean;
    testsEnabled?: boolean;
    /**
     * The branch build configuration for each toolset
     */
    toolsets?: BranchConfigurationsUpdateRequestBodyToolsets;
    trigger?: BranchConfigurationsUpdateRequestBodyTriggerEnum;
}
export declare class BranchConfigurationsUpdateRequest extends SpeakeasyBase {
    /**
     * Parameters of the configuration
     */
    requestBody: BranchConfigurationsUpdateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The branch name
     */
    branch: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum BranchConfigurationsUpdate200ApplicationJSONArtifactVersioningBuildNumberFormatEnum {
    BuildId = "buildId",
    Timestamp = "timestamp"
}
/**
 * The versioning configuration for artifacts built for this branch
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONArtifactVersioning extends SpeakeasyBase {
    buildNumberFormat?: BranchConfigurationsUpdate200ApplicationJSONArtifactVersioningBuildNumberFormatEnum;
}
/**
 * Build configuration for Android projects
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONToolsetsAndroid extends SpeakeasyBase {
    /**
     * Whether to apply automatic signing or not
     */
    automaticSigning?: boolean;
    /**
     * The Android build variant to build
     */
    buildVariant?: string;
    /**
     * Path to the Gradle wrapper script
     */
    gradleWrapperPath?: string;
    /**
     * Whether it is the root module or not
     */
    isRoot?: boolean;
    /**
     * The key alias
     */
    keyAlias?: string;
    /**
     * The key password
     */
    keyPassword?: string;
    /**
     * The keystore encoded value
     */
    keystoreEncoded?: string;
    /**
     * The name of the keystore file
     */
    keystoreFilename?: string;
    /**
     * The password of the keystore
     */
    keystorePassword?: string;
    /**
     * The Gradle module to build
     */
    module?: string;
    /**
     * Whether to run lint checks during the build (default)
     */
    runLint?: boolean;
    /**
     * Whether to run unit tests during the build (default)
     */
    runTests?: boolean;
}
/**
 * Build configuration when React Native, or other JavaScript tech, is part of the build steps
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONToolsetsJavascript extends SpeakeasyBase {
    /**
     * Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
     */
    packageJsonPath?: string;
    /**
     * Version of React Native from package.json files
     */
    reactNativeVersion?: string;
    /**
     * Whether to run Jest unit tests, via npm test, during the build
     */
    runTests?: boolean;
}
/**
 * Build configuration for Xamarin projects
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONToolsetsXamarin extends SpeakeasyBase {
    args?: string;
    configuration?: string;
    isSimBuild?: boolean;
    monoVersion?: string;
    p12File?: string;
    p12Pwd?: string;
    provProfile?: string;
    sdkBundle?: string;
    slnPath?: string;
    /**
     * Symlink of the SDK Bundle and Mono installation.
     *
     * @remarks
     * The build will use the associated Mono bundled with related Xamarin SDK. If both symlink and monoVersion or sdkBundle are passed, the symlink is taking precedence. If non-existing symlink is passed, the current stable Mono version will be configured for building.
     *
     */
    symlink?: string;
}
/**
 * Provisioning profile fetch and store information
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONToolsetsXcodeAppExtensionProvisioningProfileFiles extends SpeakeasyBase {
    /**
     * File id from secure file storage
     */
    fileId?: string;
    /**
     * Name of uploaded provisioning profile
     */
    fileName?: string;
    /**
     * Target the provisioning profile is used to sign
     */
    targetBundleIdentifier?: string;
    /**
     * Upload id to App Center File Upload Store
     */
    uploadId?: string;
}
/**
 * Build configuration when Xcode is part of the build steps
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONToolsetsXcode extends SpeakeasyBase {
    appExtensionProvisioningProfileFiles?: BranchConfigurationsUpdate200ApplicationJSONToolsetsXcodeAppExtensionProvisioningProfileFiles[];
    /**
     * The build configuration of the target to archive
     */
    archiveConfiguration?: string;
    automaticSigning?: boolean;
    /**
     * Path to Carthage file, if present
     */
    cartfilePath?: string;
    certificateEncoded?: string;
    certificateFileId?: string;
    certificateFilename?: string;
    certificatePassword?: string;
    certificateUploadId?: string;
    /**
     * Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
     *
     * @remarks
     * By default new build system is used if workspace setting is not committed to the repository. Only used for iOS React Native app, with Xcode 10.
     *
     */
    forceLegacyBuildSystem?: boolean;
    /**
     * Path to CococaPods file, if present
     */
    podfilePath?: string;
    /**
     * Xcode project/workspace path
     */
    projectOrWorkspacePath?: string;
    provisioningProfileEncoded?: string;
    provisioningProfileFileId?: string;
    provisioningProfileFilename?: string;
    provisioningProfileUploadId?: string;
    scheme?: string;
    /**
     * The target id of the selected scheme to archive
     */
    targetToArchive?: string;
    teamId?: string;
    /**
     * The selected pbxproject hash to the repositroy
     */
    xcodeProjectSha?: string;
    /**
     * Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
     */
    xcodeVersion?: string;
}
/**
 * The branch build configuration for each toolset
 */
export declare class BranchConfigurationsUpdate200ApplicationJSONToolsets extends SpeakeasyBase {
    /**
     * Build configuration for Android projects
     */
    android?: BranchConfigurationsUpdate200ApplicationJSONToolsetsAndroid;
    /**
     * Build configuration when React Native, or other JavaScript tech, is part of the build steps
     */
    javascript?: BranchConfigurationsUpdate200ApplicationJSONToolsetsJavascript;
    /**
     * Build configuration for Xamarin projects
     */
    xamarin?: BranchConfigurationsUpdate200ApplicationJSONToolsetsXamarin;
    /**
     * Build configuration when Xcode is part of the build steps
     */
    xcode?: BranchConfigurationsUpdate200ApplicationJSONToolsetsXcode;
}
export declare enum BranchConfigurationsUpdate200ApplicationJSONTriggerEnum {
    Continous = "continous",
    Continuous = "continuous",
    Manual = "manual"
}
/**
 * The branch build configuration
 */
export declare class BranchConfigurationsUpdate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The versioning configuration for artifacts built for this branch
     */
    artifactVersioning?: BranchConfigurationsUpdate200ApplicationJSONArtifactVersioning;
    badgeIsEnabled?: boolean;
    /**
     * A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
     */
    cloneFromBranch?: string;
    id: number;
    signed?: boolean;
    testsEnabled?: boolean;
    /**
     * The branch build configuration for each toolset
     */
    toolsets?: BranchConfigurationsUpdate200ApplicationJSONToolsets;
    trigger?: BranchConfigurationsUpdate200ApplicationJSONTriggerEnum;
}
export declare class BranchConfigurationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    branchConfigurationsUpdate200ApplicationJSONObject?: BranchConfigurationsUpdate200ApplicationJSON;
}
