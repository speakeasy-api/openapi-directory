import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInvoicesIdRequest extends SpeakeasyBase {
    /**
     * Invoice ID.
     */
    id: number;
}
export declare class GetInvoicesIdResponse extends SpeakeasyBase {
    /**
     * The Invoices object.
     */
    accountLineItemEntity?: shared.AccountLineItemEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
