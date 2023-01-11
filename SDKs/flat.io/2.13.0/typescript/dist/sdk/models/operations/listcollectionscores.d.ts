import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCollectionScoresPathParams extends SpeakeasyBase {
    collection: string;
}
export declare enum ListCollectionScoresDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum ListCollectionScoresSortEnum {
    CreationDate = "creationDate",
    ModificationDate = "modificationDate",
    Title = "title"
}
export declare class ListCollectionScoresQueryParams extends SpeakeasyBase {
    direction?: ListCollectionScoresDirectionEnum;
    limit?: number;
    next?: string;
    previous?: string;
    sharingKey?: string;
    sort?: ListCollectionScoresSortEnum;
}
export declare class ListCollectionScoresSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListCollectionScoresRequest extends SpeakeasyBase {
    pathParams: ListCollectionScoresPathParams;
    queryParams: ListCollectionScoresQueryParams;
    security: ListCollectionScoresSecurity;
}
export declare class ListCollectionScoresResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
}
