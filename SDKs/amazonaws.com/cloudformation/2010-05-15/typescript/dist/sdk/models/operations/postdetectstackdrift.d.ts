import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetectStackDriftActionEnum {
    DetectStackDrift = "DetectStackDrift"
}
export declare enum POSTDetectStackDriftVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDetectStackDriftRequest extends SpeakeasyBase {
    action: POSTDetectStackDriftActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetectStackDriftVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetectStackDriftResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
