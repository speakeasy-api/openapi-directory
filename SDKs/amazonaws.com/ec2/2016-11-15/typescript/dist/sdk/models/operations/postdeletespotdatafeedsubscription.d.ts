import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteSpotDatafeedSubscriptionActionEnum {
    DeleteSpotDatafeedSubscription = "DeleteSpotDatafeedSubscription"
}
export declare enum POSTDeleteSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    action: POSTDeleteSpotDatafeedSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteSpotDatafeedSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
