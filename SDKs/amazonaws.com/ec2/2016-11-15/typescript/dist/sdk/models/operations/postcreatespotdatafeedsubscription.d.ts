import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateSpotDatafeedSubscriptionActionEnum {
    CreateSpotDatafeedSubscription = "CreateSpotDatafeedSubscription"
}
export declare enum POSTCreateSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    action: POSTCreateSpotDatafeedSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateSpotDatafeedSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
