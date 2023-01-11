import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchArtifactsQueryParams extends SpeakeasyBase {
    description?: string;
    group?: string;
    labels?: string[];
    limit?: number;
    name?: string;
    offset?: number;
    order?: shared.SortOrderEnum;
    orderby?: shared.SortByEnum;
    properties?: string[];
}
export declare class SearchArtifactsRequest extends SpeakeasyBase {
    queryParams: SearchArtifactsQueryParams;
}
export declare class SearchArtifactsResponse extends SpeakeasyBase {
    artifactSearchResults?: shared.ArtifactSearchResults;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
