import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCategoriesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCategoriesListRequest extends SpeakeasyBase {
    security: PrivateCategoriesListSecurity;
}
export declare class PrivateCategoriesListResponse extends SpeakeasyBase {
    categories?: shared.Category[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
