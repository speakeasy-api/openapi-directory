import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeOrderV3Request extends SpeakeasyBase {
    requestBody?: Record<string, string>;
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * The Order change type
     */
    changeOrderType: string;
    /**
     * The marketplace technical code
     */
    marketplaceTechnicalCode: string;
    /**
     * If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
     */
    testMode?: boolean;
    /**
     * Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
     */
    userName: string;
}
export declare class ChangeOrderV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid order change request, could not be send to the marketplace. Please check the body of this request.
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
