import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}
export declare enum GETAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GETAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
    action: GETAddSourceIdentifierToSubscriptionActionEnum;
    sourceIdentifier: string;
    subscriptionName: string;
    version: GETAddSourceIdentifierToSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
