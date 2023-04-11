import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeOrderRequest extends SpeakeasyBase {
    /**
     * ETag value to identify the last known version of requested resource.\
     *
     * @remarks
     * To ensure that you are making a change on the lastest version of the resource.\
     * For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
     *
     */
    ifMatch: string;
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
export declare class ChangeOrderResponse extends SpeakeasyBase {
    /**
     * Invalid order change request, could not be send to the marketplace. Please check the body of this request.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
