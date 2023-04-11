import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}
export declare enum POSTAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
    action: POSTAddSourceIdentifierToSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddSourceIdentifierToSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
