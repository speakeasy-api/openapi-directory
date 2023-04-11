import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectArtifactsDetails } from "./awscodebuildprojectartifactsdetails";
import { AwsCodeBuildProjectEnvironment } from "./awscodebuildprojectenvironment";
import { AwsCodeBuildProjectLogsConfigDetails } from "./awscodebuildprojectlogsconfigdetails";
import { AwsCodeBuildProjectSource } from "./awscodebuildprojectsource";
import { AwsCodeBuildProjectVpcConfig } from "./awscodebuildprojectvpcconfig";
/**
 * Information about an CodeBuild project.
 */
export declare class AwsCodeBuildProjectDetails extends SpeakeasyBase {
    artifacts?: AwsCodeBuildProjectArtifactsDetails[];
    encryptionKey?: string;
    environment?: AwsCodeBuildProjectEnvironment;
    logsConfig?: AwsCodeBuildProjectLogsConfigDetails;
    name?: string;
    secondaryArtifacts?: AwsCodeBuildProjectArtifactsDetails[];
    serviceRole?: string;
    source?: AwsCodeBuildProjectSource;
    vpcConfig?: AwsCodeBuildProjectVpcConfig;
}
