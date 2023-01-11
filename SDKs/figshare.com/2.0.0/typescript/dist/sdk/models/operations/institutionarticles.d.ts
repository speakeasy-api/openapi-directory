import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstitutionArticlesPathParams extends SpeakeasyBase {
    institutionStringId: string;
}
export declare class InstitutionArticlesQueryParams extends SpeakeasyBase {
    filename: string;
    resourceId: string;
}
export declare class InstitutionArticlesRequest extends SpeakeasyBase {
    pathParams: InstitutionArticlesPathParams;
    queryParams: InstitutionArticlesQueryParams;
}
export declare class InstitutionArticlesResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
}
