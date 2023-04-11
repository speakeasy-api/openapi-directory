import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestSubscriptionScopesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Acceptable
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    notificationScopeList?: shared.NotificationScopeList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
