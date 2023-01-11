import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArtifactStatePathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class UpdateArtifactStateRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactStatePathParams;
    request: shared.UpdateState;
}
export declare class UpdateArtifactStateResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
