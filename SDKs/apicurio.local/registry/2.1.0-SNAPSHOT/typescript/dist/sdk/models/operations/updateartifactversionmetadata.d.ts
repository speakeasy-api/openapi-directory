import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArtifactVersionMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    version: string;
}
export declare class UpdateArtifactVersionMetaDataRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactVersionMetaDataPathParams;
    request: shared.EditableMetaData;
}
export declare class UpdateArtifactVersionMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
