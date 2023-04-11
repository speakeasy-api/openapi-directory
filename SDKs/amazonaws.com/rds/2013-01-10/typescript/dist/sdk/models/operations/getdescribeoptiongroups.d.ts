import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}
export declare enum GETDescribeOptionGroupsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeOptionGroupsRequest extends SpeakeasyBase {
    action: GETDescribeOptionGroupsActionEnum;
    engineName?: string;
    majorEngineVersion?: string;
    marker?: string;
    maxRecords?: number;
    optionGroupName?: string;
    version: GETDescribeOptionGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeOptionGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
