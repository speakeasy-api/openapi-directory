import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BankAccountsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultBankAccountQueryDto?: shared.PageResultBankAccountQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
