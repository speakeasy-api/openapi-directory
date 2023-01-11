import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLatestArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class GetLatestArtifactRequest extends SpeakeasyBase {
    pathParams: GetLatestArtifactPathParams;
}
export declare class GetLatestArtifactResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    fileContent?: Uint8Array;
    statusCode: number;
}
