import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelConversionTaskActionEnum {
    CancelConversionTask = "CancelConversionTask"
}
export declare enum POSTCancelConversionTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelConversionTaskRequest extends SpeakeasyBase {
    action: POSTCancelConversionTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelConversionTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelConversionTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
