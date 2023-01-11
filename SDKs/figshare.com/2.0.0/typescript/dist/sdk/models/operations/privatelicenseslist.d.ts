import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateLicensesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateLicensesListRequest extends SpeakeasyBase {
    security: PrivateLicensesListSecurity;
}
export declare class PrivateLicensesListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    licenses?: shared.License[];
    statusCode: number;
}
