import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AccountInstitutionCurationsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
export declare class AccountInstitutionCurationsQueryParams extends SpeakeasyBase {
    articleId?: number;
    groupId?: number;
    limit?: number;
    offset?: number;
    status?: AccountInstitutionCurationsStatusEnum;
}
export declare class AccountInstitutionCurationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AccountInstitutionCurationsRequest extends SpeakeasyBase {
    queryParams: AccountInstitutionCurationsQueryParams;
    security: AccountInstitutionCurationsSecurity;
}
export declare class AccountInstitutionCurationsResponse extends SpeakeasyBase {
    contentType: string;
    curation?: shared.Curation;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
