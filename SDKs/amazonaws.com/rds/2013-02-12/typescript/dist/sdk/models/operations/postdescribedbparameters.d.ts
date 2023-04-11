import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBParametersActionEnum {
    DescribeDBParameters = "DescribeDBParameters"
}
export declare enum POSTDescribeDBParametersVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTDescribeDBParametersRequest extends SpeakeasyBase {
    action: POSTDescribeDBParametersActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeDBParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
