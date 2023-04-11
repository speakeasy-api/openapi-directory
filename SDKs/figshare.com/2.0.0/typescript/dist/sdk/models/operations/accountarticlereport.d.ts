import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountArticleReportSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class AccountArticleReportRequest extends SpeakeasyBase {
    /**
     * A group ID to filter by
     */
    groupId?: number;
}
export declare class AccountArticleReportResponse extends SpeakeasyBase {
    /**
     * OK. An array of account report entries
     */
    accountReports?: shared.AccountReport[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
