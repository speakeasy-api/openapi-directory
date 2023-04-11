import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1CashPaymentsIdRequest extends SpeakeasyBase {
    /**
     * Id of Cash Receipt to return.
     */
    id: number;
}
export declare class GetV1CashPaymentsIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPaymentDto?: shared.CashPaymentDto;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
