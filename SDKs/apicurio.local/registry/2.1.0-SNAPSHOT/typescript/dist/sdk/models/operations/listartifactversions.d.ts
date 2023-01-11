import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactVersionsPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class ListArtifactVersionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class ListArtifactVersionsRequest extends SpeakeasyBase {
    pathParams: ListArtifactVersionsPathParams;
    queryParams: ListArtifactVersionsQueryParams;
}
export declare class ListArtifactVersionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    versionSearchResults?: shared.VersionSearchResults;
}
