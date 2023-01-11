import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArtifactMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class UpdateArtifactMetaDataRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactMetaDataPathParams;
    request: shared.EditableMetaData;
}
export declare class UpdateArtifactMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
