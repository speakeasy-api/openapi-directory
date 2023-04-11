import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountArticleReportGenerateResponse extends SpeakeasyBase {
    /**
     * OK. AccountReport created.
     */
    accountReport?: shared.AccountReport;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
