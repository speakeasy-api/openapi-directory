import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssueRefundSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class IssueRefundRequest extends SpeakeasyBase {
    issueRefundRequest?: shared.IssueRefundRequest;
    /**
     * The unique identifier of the order. Order IDs are returned in the <b>getOrders</b> method (and <b>GetOrders</b> call of Trading API). The <b>issueRefund</b> method supports the legacy API Order IDs and REST API order IDs.
     */
    orderId: string;
}
export declare class IssueRefundResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    refund?: shared.Refund;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
