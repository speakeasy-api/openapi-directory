import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBEngineVersionsActionEnum {
    DescribeDBEngineVersions = "DescribeDBEngineVersions"
}
export declare enum POSTDescribeDBEngineVersionsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeDBEngineVersionsRequest extends SpeakeasyBase {
    action: POSTDescribeDBEngineVersionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDBEngineVersionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
