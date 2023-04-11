import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStopStackSetOperationActionEnum {
    StopStackSetOperation = "StopStackSetOperation"
}
export declare enum POSTStopStackSetOperationVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTStopStackSetOperationRequest extends SpeakeasyBase {
    action: POSTStopStackSetOperationActionEnum;
    requestBody?: Uint8Array;
    version: POSTStopStackSetOperationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStopStackSetOperationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
