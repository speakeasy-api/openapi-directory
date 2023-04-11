import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeFleetInstancesActionEnum {
    DescribeFleetInstances = "DescribeFleetInstances"
}
export declare enum POSTDescribeFleetInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeFleetInstancesRequest extends SpeakeasyBase {
    action: POSTDescribeFleetInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeFleetInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeFleetInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
