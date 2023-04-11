import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeElasticGpusActionEnum {
    DescribeElasticGpus = "DescribeElasticGpus"
}
export declare enum POSTDescribeElasticGpusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeElasticGpusRequest extends SpeakeasyBase {
    action: POSTDescribeElasticGpusActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeElasticGpusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeElasticGpusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
