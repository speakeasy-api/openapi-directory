import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteEventSubscriptionActionEnum {
    DeleteEventSubscription = "DeleteEventSubscription"
}
export declare enum POSTDeleteEventSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDeleteEventSubscriptionRequest extends SpeakeasyBase {
    action: POSTDeleteEventSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteEventSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
