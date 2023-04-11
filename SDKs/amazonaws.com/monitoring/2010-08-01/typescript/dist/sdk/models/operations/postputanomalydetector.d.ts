import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutAnomalyDetectorActionEnum {
    PutAnomalyDetector = "PutAnomalyDetector"
}
export declare enum POSTPutAnomalyDetectorVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutAnomalyDetectorRequest extends SpeakeasyBase {
    action: POSTPutAnomalyDetectorActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutAnomalyDetectorVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutAnomalyDetectorResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
