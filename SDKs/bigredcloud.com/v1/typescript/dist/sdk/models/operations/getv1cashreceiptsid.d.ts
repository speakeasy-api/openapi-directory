import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1CashReceiptsIdRequest extends SpeakeasyBase {
    /**
     * Id of Cash Receipt to return.
     */
    id: number;
}
export declare class GetV1CashReceiptsIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashReceiptDto?: shared.CashReceiptDto;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
