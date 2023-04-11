import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetectStackSetDriftActionEnum {
    DetectStackSetDrift = "DetectStackSetDrift"
}
export declare enum POSTDetectStackSetDriftVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDetectStackSetDriftRequest extends SpeakeasyBase {
    action: POSTDetectStackSetDriftActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetectStackSetDriftVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetectStackSetDriftResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
