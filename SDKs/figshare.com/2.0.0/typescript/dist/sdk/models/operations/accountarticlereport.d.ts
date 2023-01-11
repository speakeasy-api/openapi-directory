import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountArticleReportQueryParams extends SpeakeasyBase {
    groupId?: number;
}
export declare class AccountArticleReportSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AccountArticleReportRequest extends SpeakeasyBase {
    queryParams: AccountArticleReportQueryParams;
    security: AccountArticleReportSecurity;
}
export declare class AccountArticleReportResponse extends SpeakeasyBase {
    accountReports?: shared.AccountReport[];
    contentType: string;
    statusCode: number;
}
