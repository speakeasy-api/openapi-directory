import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1PaymentsIdRequest extends SpeakeasyBase {
    /**
     * Id of Payment to return.
     */
    id: number;
}
export declare class GetV1PaymentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentDto?: shared.PaymentDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
