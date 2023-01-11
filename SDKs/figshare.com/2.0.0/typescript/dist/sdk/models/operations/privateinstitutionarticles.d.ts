import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PrivateInstitutionArticlesOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}
export declare enum PrivateInstitutionArticlesOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PrivateInstitutionArticlesQueryParams extends SpeakeasyBase {
    itemType?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: PrivateInstitutionArticlesOrderEnum;
    orderDirection?: PrivateInstitutionArticlesOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
    status?: number;
}
export declare class PrivateInstitutionArticlesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionArticlesRequest extends SpeakeasyBase {
    queryParams: PrivateInstitutionArticlesQueryParams;
    security: PrivateInstitutionArticlesSecurity;
}
export declare class PrivateInstitutionArticlesResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
