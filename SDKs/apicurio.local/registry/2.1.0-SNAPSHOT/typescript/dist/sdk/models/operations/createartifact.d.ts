import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateArtifactPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateArtifactQueryParams extends SpeakeasyBase {
    canonical?: boolean;
    ifExists?: shared.IfExistsEnum;
}
export declare class CreateArtifactHeaders extends SpeakeasyBase {
    xRegistryArtifactId?: string;
    xRegistryArtifactType?: shared.ArtifactTypeEnum;
    xRegistryDescription?: string;
    xRegistryDescriptionEncoded?: string;
    xRegistryName?: string;
    xRegistryNameEncoded?: string;
    xRegistryVersion?: string;
}
export declare class CreateArtifactRequest extends SpeakeasyBase {
    pathParams: CreateArtifactPathParams;
    queryParams: CreateArtifactQueryParams;
    headers: CreateArtifactHeaders;
    request: Uint8Array;
}
export declare class CreateArtifactResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.ErrorT;
    ruleViolationError?: shared.RuleViolationError;
    statusCode: number;
}
