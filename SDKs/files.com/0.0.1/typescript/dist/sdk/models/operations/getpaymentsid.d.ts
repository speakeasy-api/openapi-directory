import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentsIdRequest extends SpeakeasyBase {
    /**
     * Payment ID.
     */
    id: number;
}
export declare class GetPaymentsIdResponse extends SpeakeasyBase {
    /**
     * The Payments object.
     */
    accountLineItemEntity?: shared.AccountLineItemEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
