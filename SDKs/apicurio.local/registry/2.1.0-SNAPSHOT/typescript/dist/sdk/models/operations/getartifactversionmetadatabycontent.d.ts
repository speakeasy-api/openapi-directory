import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactVersionMetaDataByContentPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class GetArtifactVersionMetaDataByContentQueryParams extends SpeakeasyBase {
    canonical?: boolean;
}
export declare class GetArtifactVersionMetaDataByContentRequest extends SpeakeasyBase {
    pathParams: GetArtifactVersionMetaDataByContentPathParams;
    queryParams: GetArtifactVersionMetaDataByContentQueryParams;
    request: Uint8Array;
}
export declare class GetArtifactVersionMetaDataByContentResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    versionMetaData?: shared.VersionMetaData;
}
