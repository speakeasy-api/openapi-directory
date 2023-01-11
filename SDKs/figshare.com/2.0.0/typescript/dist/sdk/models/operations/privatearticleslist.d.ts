import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlesListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    page?: number;
    pageSize?: number;
}
export declare class PrivateArticlesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlesListRequest extends SpeakeasyBase {
    queryParams: PrivateArticlesListQueryParams;
    security: PrivateArticlesListSecurity;
}
export declare class PrivateArticlesListResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
