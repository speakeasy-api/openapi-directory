import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteAnomalyDetectorActionEnum {
    DeleteAnomalyDetector = "DeleteAnomalyDetector"
}
export declare enum POSTDeleteAnomalyDetectorVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDeleteAnomalyDetectorRequest extends SpeakeasyBase {
    action: POSTDeleteAnomalyDetectorActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteAnomalyDetectorVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteAnomalyDetectorResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
