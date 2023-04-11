import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails } from "./awscodebuildprojectenvironmentenvironmentvariablesdetails";
import { AwsCodeBuildProjectEnvironmentRegistryCredential } from "./awscodebuildprojectenvironmentregistrycredential";
/**
 * Information about the build environment for this build project.
 */
export declare class AwsCodeBuildProjectEnvironment extends SpeakeasyBase {
    certificate?: string;
    environmentVariables?: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[];
    imagePullCredentialsType?: string;
    privilegedMode?: boolean;
    registryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
    type?: string;
}
