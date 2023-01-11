import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchArtifactsByContentOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SearchArtifactsByContentOrderbyEnum {
    Name = "name",
    CreatedOn = "createdOn"
}
export declare class SearchArtifactsByContentQueryParams extends SpeakeasyBase {
    artifactType?: shared.ArtifactTypeEnum;
    canonical?: boolean;
    limit?: number;
    offset?: number;
    order?: SearchArtifactsByContentOrderEnum;
    orderby?: SearchArtifactsByContentOrderbyEnum;
}
export declare class SearchArtifactsByContentRequest extends SpeakeasyBase {
    queryParams: SearchArtifactsByContentQueryParams;
    request: Uint8Array;
}
export declare class SearchArtifactsByContentResponse extends SpeakeasyBase {
    artifactSearchResults?: shared.ArtifactSearchResults;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
