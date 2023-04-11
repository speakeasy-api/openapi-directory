import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BranchConfigurationsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum BranchConfigurationsCreateRequestBodyArtifactVersioningBuildNumberFormatEnum {
    BuildId = "buildId",
    Timestamp = "timestamp"
}
/**
 * The versioning configuration for artifacts built for this branch
 */
export declare class BranchConfigurationsCreateRequestBodyArtifactVersioning extends SpeakeasyBase {
    buildNumberFormat?: BranchConfigurationsCreateRequestBodyArtifactVersioningBuildNumberFormatEnum;
}
/**
 * Build configuration for Android projects
 */
export declare class BranchConfigurationsCreateRequestBodyToolsetsAndroid extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreateRequestBodyToolsetsJavascript extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreateRequestBodyToolsetsXamarin extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreateRequestBodyToolsetsXcode extends SpeakeasyBase {
    appExtensionProvisioningProfileFiles?: BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles[];
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
export declare class BranchConfigurationsCreateRequestBodyToolsets extends SpeakeasyBase {
    /**
     * Build configuration for Android projects
     */
    android?: BranchConfigurationsCreateRequestBodyToolsetsAndroid;
    /**
     * Build configuration when React Native, or other JavaScript tech, is part of the build steps
     */
    javascript?: BranchConfigurationsCreateRequestBodyToolsetsJavascript;
    /**
     * Build configuration for Xamarin projects
     */
    xamarin?: BranchConfigurationsCreateRequestBodyToolsetsXamarin;
    /**
     * Build configuration when Xcode is part of the build steps
     */
    xcode?: BranchConfigurationsCreateRequestBodyToolsetsXcode;
}
export declare enum BranchConfigurationsCreateRequestBodyTriggerEnum {
    Continous = "continous",
    Continuous = "continuous",
    Manual = "manual"
}
/**
 * The branch build configuration
 */
export declare class BranchConfigurationsCreateRequestBody extends SpeakeasyBase {
    /**
     * The versioning configuration for artifacts built for this branch
     */
    artifactVersioning?: BranchConfigurationsCreateRequestBodyArtifactVersioning;
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
    toolsets?: BranchConfigurationsCreateRequestBodyToolsets;
    trigger?: BranchConfigurationsCreateRequestBodyTriggerEnum;
}
export declare class BranchConfigurationsCreateRequest extends SpeakeasyBase {
    /**
     * Parameters of the configuration
     */
    requestBody: BranchConfigurationsCreateRequestBody;
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
export declare enum BranchConfigurationsCreate200ApplicationJSONArtifactVersioningBuildNumberFormatEnum {
    BuildId = "buildId",
    Timestamp = "timestamp"
}
/**
 * The versioning configuration for artifacts built for this branch
 */
export declare class BranchConfigurationsCreate200ApplicationJSONArtifactVersioning extends SpeakeasyBase {
    buildNumberFormat?: BranchConfigurationsCreate200ApplicationJSONArtifactVersioningBuildNumberFormatEnum;
}
/**
 * Build configuration for Android projects
 */
export declare class BranchConfigurationsCreate200ApplicationJSONToolsetsAndroid extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreate200ApplicationJSONToolsetsJavascript extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreate200ApplicationJSONToolsetsXamarin extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreate200ApplicationJSONToolsetsXcodeAppExtensionProvisioningProfileFiles extends SpeakeasyBase {
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
export declare class BranchConfigurationsCreate200ApplicationJSONToolsetsXcode extends SpeakeasyBase {
    appExtensionProvisioningProfileFiles?: BranchConfigurationsCreate200ApplicationJSONToolsetsXcodeAppExtensionProvisioningProfileFiles[];
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
export declare class BranchConfigurationsCreate200ApplicationJSONToolsets extends SpeakeasyBase {
    /**
     * Build configuration for Android projects
     */
    android?: BranchConfigurationsCreate200ApplicationJSONToolsetsAndroid;
    /**
     * Build configuration when React Native, or other JavaScript tech, is part of the build steps
     */
    javascript?: BranchConfigurationsCreate200ApplicationJSONToolsetsJavascript;
    /**
     * Build configuration for Xamarin projects
     */
    xamarin?: BranchConfigurationsCreate200ApplicationJSONToolsetsXamarin;
    /**
     * Build configuration when Xcode is part of the build steps
     */
    xcode?: BranchConfigurationsCreate200ApplicationJSONToolsetsXcode;
}
export declare enum BranchConfigurationsCreate200ApplicationJSONTriggerEnum {
    Continous = "continous",
    Continuous = "continuous",
    Manual = "manual"
}
/**
 * The branch build configuration
 */
export declare class BranchConfigurationsCreate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The versioning configuration for artifacts built for this branch
     */
    artifactVersioning?: BranchConfigurationsCreate200ApplicationJSONArtifactVersioning;
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
    toolsets?: BranchConfigurationsCreate200ApplicationJSONToolsets;
    trigger?: BranchConfigurationsCreate200ApplicationJSONTriggerEnum;
}
export declare class BranchConfigurationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    branchConfigurationsCreate200ApplicationJSONObject?: BranchConfigurationsCreate200ApplicationJSON;
}
