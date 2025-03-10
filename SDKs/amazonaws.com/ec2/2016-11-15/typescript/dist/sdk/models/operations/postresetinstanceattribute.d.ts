import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetInstanceAttributeActionEnum {
    ResetInstanceAttribute = "ResetInstanceAttribute"
}
export declare enum POSTResetInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTResetInstanceAttributeRequest extends SpeakeasyBase {
    action: POSTResetInstanceAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetInstanceAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetInstanceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
