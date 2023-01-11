import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactVersionMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    version: string;
}
export declare class GetArtifactVersionMetaDataRequest extends SpeakeasyBase {
    pathParams: GetArtifactVersionMetaDataPathParams;
}
export declare class GetArtifactVersionMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    versionMetaData?: shared.VersionMetaData;
}
