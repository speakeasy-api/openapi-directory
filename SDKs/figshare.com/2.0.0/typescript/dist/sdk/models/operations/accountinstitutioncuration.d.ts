import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountInstitutionCurationPathParams extends SpeakeasyBase {
    curationId: number;
}
export declare class AccountInstitutionCurationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AccountInstitutionCurationRequest extends SpeakeasyBase {
    pathParams: AccountInstitutionCurationPathParams;
    security: AccountInstitutionCurationSecurity;
}
export declare class AccountInstitutionCurationResponse extends SpeakeasyBase {
    contentType: string;
    curationDetail?: shared.CurationDetail;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
