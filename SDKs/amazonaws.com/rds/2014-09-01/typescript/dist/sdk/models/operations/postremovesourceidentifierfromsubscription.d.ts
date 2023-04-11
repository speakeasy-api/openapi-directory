import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveSourceIdentifierFromSubscriptionActionEnum {
    RemoveSourceIdentifierFromSubscription = "RemoveSourceIdentifierFromSubscription"
}
export declare enum POSTRemoveSourceIdentifierFromSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTRemoveSourceIdentifierFromSubscriptionRequest extends SpeakeasyBase {
    action: POSTRemoveSourceIdentifierFromSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveSourceIdentifierFromSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveSourceIdentifierFromSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
