import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class UpdateArtifactHeaders extends SpeakeasyBase {
    xRegistryDescription?: string;
    xRegistryDescriptionEncoded?: string;
    xRegistryName?: string;
    xRegistryNameEncoded?: string;
    xRegistryVersion?: string;
}
export declare class UpdateArtifactRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactPathParams;
    headers: UpdateArtifactHeaders;
    request: Uint8Array;
}
export declare class UpdateArtifactResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
