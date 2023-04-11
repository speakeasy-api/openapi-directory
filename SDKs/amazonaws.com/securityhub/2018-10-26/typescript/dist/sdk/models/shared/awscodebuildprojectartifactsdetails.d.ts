import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the build artifacts for the CodeBuild project.
 */
export declare class AwsCodeBuildProjectArtifactsDetails extends SpeakeasyBase {
    artifactIdentifier?: string;
    encryptionDisabled?: boolean;
    location?: string;
    name?: string;
    namespaceType?: string;
    overrideArtifactName?: boolean;
    packaging?: string;
    path?: string;
    type?: string;
}
