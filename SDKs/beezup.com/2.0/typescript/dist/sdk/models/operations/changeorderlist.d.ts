import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeOrderListRequest extends SpeakeasyBase {
    changeOrderListRequest: shared.ChangeOrderListRequest;
    /**
     * The Order change type
     */
    changeOrderType: string;
    /**
     * If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
     */
    testMode?: boolean;
    /**
     * Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
     */
    userName: string;
}
export declare class ChangeOrderListResponse extends SpeakeasyBase {
    /**
     * Requested too many batch operations
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Succesfully received and processed batched operations. Please check response to see the status per operation.
     */
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
}
