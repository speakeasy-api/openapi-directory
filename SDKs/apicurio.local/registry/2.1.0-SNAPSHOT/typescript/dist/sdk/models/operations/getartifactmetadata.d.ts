import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class GetArtifactMetaDataRequest extends SpeakeasyBase {
    pathParams: GetArtifactMetaDataPathParams;
}
export declare class GetArtifactMetaDataResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
