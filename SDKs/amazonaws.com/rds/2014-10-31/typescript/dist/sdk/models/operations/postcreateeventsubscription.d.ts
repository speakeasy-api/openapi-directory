import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateEventSubscriptionActionEnum {
    CreateEventSubscription = "CreateEventSubscription"
}
export declare enum POSTCreateEventSubscriptionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateEventSubscriptionRequest extends SpeakeasyBase {
    action: POSTCreateEventSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateEventSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
