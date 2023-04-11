import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionArticlesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * The field by which to order. Default varies by endpoint/resource.
 */
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
export declare class PrivateInstitutionArticlesRequest extends SpeakeasyBase {
    /**
     * Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model
     */
    itemType?: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    modifiedSince?: string;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * The field by which to order. Default varies by endpoint/resource.
     */
    order?: PrivateInstitutionArticlesOrderEnum;
    orderDirection?: PrivateInstitutionArticlesOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    publishedSince?: string;
    /**
     * only return collections with this resource_doi
     */
    resourceDoi?: string;
    /**
     * only return collections with this status
     */
    status?: number;
}
export declare class PrivateInstitutionArticlesResponse extends SpeakeasyBase {
    /**
     * OK. An array of articles belonging to the institution
     */
    articles?: shared.Article[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
