import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectArticlesCreatePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectArticlesCreateQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    page?: number;
    pageSize?: number;
}
export declare class PrivateProjectArticlesCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectArticlesCreateRequest extends SpeakeasyBase {
    pathParams: PrivateProjectArticlesCreatePathParams;
    queryParams: PrivateProjectArticlesCreateQueryParams;
    request: shared.ArticleProjectCreate;
    security: PrivateProjectArticlesCreateSecurity;
}
export declare class PrivateProjectArticlesCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
