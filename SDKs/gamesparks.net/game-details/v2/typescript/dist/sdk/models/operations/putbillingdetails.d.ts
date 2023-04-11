import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutBillingDetailsRequest extends SpeakeasyBase {
    /**
     * billingDetails
     */
    billingDetailsModel: shared.BillingDetailsModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class PutBillingDetailsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    billingDetailsModel?: shared.BillingDetailsModel;
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
