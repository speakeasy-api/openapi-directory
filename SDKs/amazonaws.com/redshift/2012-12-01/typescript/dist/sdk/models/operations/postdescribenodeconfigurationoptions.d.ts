import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeNodeConfigurationOptionsActionEnum {
    DescribeNodeConfigurationOptions = "DescribeNodeConfigurationOptions"
}
export declare enum POSTDescribeNodeConfigurationOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDescribeNodeConfigurationOptionsRequest extends SpeakeasyBase {
    action: POSTDescribeNodeConfigurationOptionsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeNodeConfigurationOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeNodeConfigurationOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
