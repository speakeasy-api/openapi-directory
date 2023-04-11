import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBClusterParametersActionEnum {
    DescribeDBClusterParameters = "DescribeDBClusterParameters"
}
export declare enum POSTDescribeDBClusterParametersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDescribeDBClusterParametersRequest extends SpeakeasyBase {
    action: POSTDescribeDBClusterParametersActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeDBClusterParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
