import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReservedDBInstancesActionEnum {
    DescribeReservedDBInstances = "DescribeReservedDBInstances"
}
export declare enum POSTDescribeReservedDBInstancesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTDescribeReservedDBInstancesRequest extends SpeakeasyBase {
    action: POSTDescribeReservedDBInstancesActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
