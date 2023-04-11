import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetImageAttributeActionEnum {
    ResetImageAttribute = "ResetImageAttribute"
}
export declare enum POSTResetImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTResetImageAttributeRequest extends SpeakeasyBase {
    action: POSTResetImageAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetImageAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetImageAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
