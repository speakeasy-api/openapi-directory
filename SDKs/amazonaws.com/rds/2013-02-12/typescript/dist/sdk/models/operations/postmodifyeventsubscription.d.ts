import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyEventSubscriptionActionEnum {
    ModifyEventSubscription = "ModifyEventSubscription"
}
export declare enum POSTModifyEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTModifyEventSubscriptionRequest extends SpeakeasyBase {
    action: POSTModifyEventSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyEventSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
