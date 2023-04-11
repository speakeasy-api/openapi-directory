import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReservedDBInstancesActionEnum {
    DescribeReservedDBInstances = "DescribeReservedDBInstances"
}
export declare enum POSTDescribeReservedDBInstancesVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeReservedDBInstancesRequest extends SpeakeasyBase {
    action: POSTDescribeReservedDBInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeReservedDBInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeReservedDBInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
