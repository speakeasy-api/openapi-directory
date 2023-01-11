import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateArtifactVersionPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class CreateArtifactVersionHeaders extends SpeakeasyBase {
    xRegistryDescription?: string;
    xRegistryDescriptionEncoded?: string;
    xRegistryName?: string;
    xRegistryNameEncoded?: string;
    xRegistryVersion?: string;
}
export declare class CreateArtifactVersionRequest extends SpeakeasyBase {
    pathParams: CreateArtifactVersionPathParams;
    headers: CreateArtifactVersionHeaders;
    request: Uint8Array;
}
export declare class CreateArtifactVersionResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    ruleViolationError?: shared.RuleViolationError;
    statusCode: number;
    versionMetaData?: shared.VersionMetaData;
}
