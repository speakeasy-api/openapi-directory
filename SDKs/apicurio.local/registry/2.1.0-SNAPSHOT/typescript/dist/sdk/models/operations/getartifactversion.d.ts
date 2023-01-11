import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactVersionPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    version: string;
}
export declare class GetArtifactVersionRequest extends SpeakeasyBase {
    pathParams: GetArtifactVersionPathParams;
}
export declare class GetArtifactVersionResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    fileContent?: Uint8Array;
    statusCode: number;
}
