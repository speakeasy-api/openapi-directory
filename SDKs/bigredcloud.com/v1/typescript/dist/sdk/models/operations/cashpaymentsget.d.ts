import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CashPaymentsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultCashPaymentQueryDto?: shared.PageResultCashPaymentQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
