import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionAccountsListQueryParams extends SpeakeasyBase {
    email?: string;
    institutionUserId?: string;
    isActive?: number;
    limit?: number;
    offset?: number;
    page?: number;
    pageSize?: number;
}
export declare class PrivateInstitutionAccountsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionAccountsListRequest extends SpeakeasyBase {
    queryParams: PrivateInstitutionAccountsListQueryParams;
    security: PrivateInstitutionAccountsListSecurity;
}
export declare class PrivateInstitutionAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    shortAccounts?: shared.ShortAccount[];
    statusCode: number;
}
