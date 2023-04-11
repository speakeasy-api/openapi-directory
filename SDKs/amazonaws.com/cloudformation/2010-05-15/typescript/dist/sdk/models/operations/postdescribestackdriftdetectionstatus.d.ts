import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeStackDriftDetectionStatusActionEnum {
    DescribeStackDriftDetectionStatus = "DescribeStackDriftDetectionStatus"
}
export declare enum POSTDescribeStackDriftDetectionStatusVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeStackDriftDetectionStatusRequest extends SpeakeasyBase {
    action: POSTDescribeStackDriftDetectionStatusActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeStackDriftDetectionStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeStackDriftDetectionStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
