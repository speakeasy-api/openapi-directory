import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionDataRequest extends SpeakeasyBase {
    /**
     * The identifier of the user to load.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GetSubscriptionDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    /**
     * The data requested
     */
    subscriptionDetails?: shared.SubscriptionDetails;
}
