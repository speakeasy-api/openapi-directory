import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveSourceIdentifierFromSubscriptionActionEnum {
    RemoveSourceIdentifierFromSubscription = "RemoveSourceIdentifierFromSubscription"
}
export declare enum GETRemoveSourceIdentifierFromSubscriptionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRemoveSourceIdentifierFromSubscriptionRequest extends SpeakeasyBase {
    action: GETRemoveSourceIdentifierFromSubscriptionActionEnum;
    /**
     *  The source identifier to be removed from the subscription, such as the instance identifier for an instance, or the name of a security group.
     */
    sourceIdentifier: string;
    /**
     * The name of the Amazon DocumentDB event notification subscription that you want to remove a source identifier from.
     */
    subscriptionName: string;
    version: GETRemoveSourceIdentifierFromSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemoveSourceIdentifierFromSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
