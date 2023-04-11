import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBParametersActionEnum {
    DescribeDBParameters = "DescribeDBParameters"
}
export declare enum GETDescribeDBParametersVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeDBParametersRequest extends SpeakeasyBase {
    action: GETDescribeDBParametersActionEnum;
    dbParameterGroupName: string;
    marker?: string;
    maxRecords?: number;
    source?: string;
    version: GETDescribeDBParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
