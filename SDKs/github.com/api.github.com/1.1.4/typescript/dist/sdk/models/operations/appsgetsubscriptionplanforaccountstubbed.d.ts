import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetSubscriptionPlanForAccountStubbedRequest extends SpeakeasyBase {
    /**
     * account_id parameter
     */
    accountId: number;
}
export declare class AppsGetSubscriptionPlanForAccountStubbedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    marketplacePurchase?: shared.MarketplacePurchase;
}
