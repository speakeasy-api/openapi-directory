import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBEngineVersionsActionEnum {
    DescribeDBEngineVersions = "DescribeDBEngineVersions"
}
export declare enum GETDescribeDBEngineVersionsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeDBEngineVersionsRequest extends SpeakeasyBase {
    action: GETDescribeDBEngineVersionsActionEnum;
    dbParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    listSupportedCharacterSets?: boolean;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeDBEngineVersionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
