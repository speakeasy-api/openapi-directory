import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CashReceiptsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultCashReceiptQueryDto?: shared.PageResultCashReceiptQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
