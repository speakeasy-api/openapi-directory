import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteEventSubscriptionActionEnum {
    DeleteEventSubscription = "DeleteEventSubscription"
}
export declare enum GETDeleteEventSubscriptionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteEventSubscriptionRequest extends SpeakeasyBase {
    action: GETDeleteEventSubscriptionActionEnum;
    /**
     * The name of the Amazon DocumentDB event notification subscription that you want to delete.
     */
    subscriptionName: string;
    version: GETDeleteEventSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
