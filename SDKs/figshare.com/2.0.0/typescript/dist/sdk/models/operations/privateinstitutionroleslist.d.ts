import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionRolesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionRolesListRequest extends SpeakeasyBase {
    security: PrivateInstitutionRolesListSecurity;
}
export declare class PrivateInstitutionRolesListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    roles?: shared.Role[];
    statusCode: number;
}
