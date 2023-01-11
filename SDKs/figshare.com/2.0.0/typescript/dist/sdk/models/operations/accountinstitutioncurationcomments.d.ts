import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountInstitutionCurationCommentsPathParams extends SpeakeasyBase {
    curationId: number;
}
export declare class AccountInstitutionCurationCommentsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AccountInstitutionCurationCommentsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AccountInstitutionCurationCommentsRequest extends SpeakeasyBase {
    pathParams: AccountInstitutionCurationCommentsPathParams;
    queryParams: AccountInstitutionCurationCommentsQueryParams;
    security: AccountInstitutionCurationCommentsSecurity;
}
export declare class AccountInstitutionCurationCommentsResponse extends SpeakeasyBase {
    contentType: string;
    curationComment?: shared.CurationComment;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
