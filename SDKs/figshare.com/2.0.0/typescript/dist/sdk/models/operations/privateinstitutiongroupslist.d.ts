import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionGroupsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionGroupsListRequest extends SpeakeasyBase {
    security: PrivateInstitutionGroupsListSecurity;
}
export declare class PrivateInstitutionGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    groups?: shared.Group[];
    statusCode: number;
}
