import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetectStackResourceDriftActionEnum {
    DetectStackResourceDrift = "DetectStackResourceDrift"
}
export declare enum POSTDetectStackResourceDriftVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDetectStackResourceDriftRequest extends SpeakeasyBase {
    action: POSTDetectStackResourceDriftActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetectStackResourceDriftVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetectStackResourceDriftResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
