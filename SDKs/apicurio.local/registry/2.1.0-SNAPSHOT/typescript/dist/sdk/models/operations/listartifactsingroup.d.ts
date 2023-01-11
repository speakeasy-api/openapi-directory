import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactsInGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ListArtifactsInGroupQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    order?: shared.SortOrderEnum;
    orderby?: shared.SortByEnum;
}
export declare class ListArtifactsInGroupRequest extends SpeakeasyBase {
    pathParams: ListArtifactsInGroupPathParams;
    queryParams: ListArtifactsInGroupQueryParams;
}
export declare class ListArtifactsInGroupResponse extends SpeakeasyBase {
    artifactSearchResults?: shared.ArtifactSearchResults;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
