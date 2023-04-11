import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEngineDefaultParametersActionEnum {
    DescribeEngineDefaultParameters = "DescribeEngineDefaultParameters"
}
export declare enum GETDescribeEngineDefaultParametersVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeEngineDefaultParametersRequest extends SpeakeasyBase {
    action: GETDescribeEngineDefaultParametersActionEnum;
    dbParameterGroupFamily: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeEngineDefaultParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEngineDefaultParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
