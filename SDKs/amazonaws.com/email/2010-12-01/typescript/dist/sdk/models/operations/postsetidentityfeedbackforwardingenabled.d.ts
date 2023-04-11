import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetIdentityFeedbackForwardingEnabledActionEnum {
    SetIdentityFeedbackForwardingEnabled = "SetIdentityFeedbackForwardingEnabled"
}
export declare enum POSTSetIdentityFeedbackForwardingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSetIdentityFeedbackForwardingEnabledRequest extends SpeakeasyBase {
    action: POSTSetIdentityFeedbackForwardingEnabledActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetIdentityFeedbackForwardingEnabledVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetIdentityFeedbackForwardingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
