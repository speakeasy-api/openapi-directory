import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountArticleReportGenerateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AccountArticleReportGenerateRequest extends SpeakeasyBase {
    security: AccountArticleReportGenerateSecurity;
}
export declare class AccountArticleReportGenerateResponse extends SpeakeasyBase {
    accountReport?: shared.AccountReport;
    contentType: string;
    statusCode: number;
}
