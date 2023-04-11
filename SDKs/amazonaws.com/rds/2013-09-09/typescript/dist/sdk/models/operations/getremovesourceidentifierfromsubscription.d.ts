import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveSourceIdentifierFromSubscriptionActionEnum {
    RemoveSourceIdentifierFromSubscription = "RemoveSourceIdentifierFromSubscription"
}
export declare enum GETRemoveSourceIdentifierFromSubscriptionVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GETRemoveSourceIdentifierFromSubscriptionRequest extends SpeakeasyBase {
    action: GETRemoveSourceIdentifierFromSubscriptionActionEnum;
    sourceIdentifier: string;
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
