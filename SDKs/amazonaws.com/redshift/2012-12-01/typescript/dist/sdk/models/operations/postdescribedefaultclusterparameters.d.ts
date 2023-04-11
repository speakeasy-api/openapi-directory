import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDefaultClusterParametersActionEnum {
    DescribeDefaultClusterParameters = "DescribeDefaultClusterParameters"
}
export declare enum POSTDescribeDefaultClusterParametersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDescribeDefaultClusterParametersRequest extends SpeakeasyBase {
    action: POSTDescribeDefaultClusterParametersActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeDefaultClusterParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDefaultClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
