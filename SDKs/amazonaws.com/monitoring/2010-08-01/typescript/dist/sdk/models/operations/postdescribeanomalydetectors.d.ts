import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAnomalyDetectorsActionEnum {
    DescribeAnomalyDetectors = "DescribeAnomalyDetectors"
}
export declare enum POSTDescribeAnomalyDetectorsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDescribeAnomalyDetectorsRequest extends SpeakeasyBase {
    action: POSTDescribeAnomalyDetectorsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeAnomalyDetectorsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAnomalyDetectorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
