import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultPaymentQueryDto?: shared.PageResultPaymentQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
