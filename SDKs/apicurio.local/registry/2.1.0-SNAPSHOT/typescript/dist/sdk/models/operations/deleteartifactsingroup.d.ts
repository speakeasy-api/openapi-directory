import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteArtifactsInGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class DeleteArtifactsInGroupRequest extends SpeakeasyBase {
    pathParams: DeleteArtifactsInGroupPathParams;
}
export declare class DeleteArtifactsInGroupResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
