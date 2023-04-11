import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetAwsNetworkPerformanceDataActionEnum {
    GetAwsNetworkPerformanceData = "GetAwsNetworkPerformanceData"
}
export declare enum POSTGetAwsNetworkPerformanceDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetAwsNetworkPerformanceDataRequest extends SpeakeasyBase {
    action: POSTGetAwsNetworkPerformanceDataActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetAwsNetworkPerformanceDataVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetAwsNetworkPerformanceDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
