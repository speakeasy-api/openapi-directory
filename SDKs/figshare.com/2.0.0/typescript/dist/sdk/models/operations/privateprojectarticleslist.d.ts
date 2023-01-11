import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectArticlesListPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectArticlesListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    page?: number;
    pageSize?: number;
}
export declare class PrivateProjectArticlesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectArticlesListRequest extends SpeakeasyBase {
    pathParams: PrivateProjectArticlesListPathParams;
    queryParams: PrivateProjectArticlesListQueryParams;
    security: PrivateProjectArticlesListSecurity;
}
export declare class PrivateProjectArticlesListResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
