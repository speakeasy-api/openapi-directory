import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeReservedDBInstancesActionEnum {
    DescribeReservedDBInstances = "DescribeReservedDBInstances"
}
export declare enum GETDescribeReservedDBInstancesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDescribeReservedDBInstancesRequest extends SpeakeasyBase {
    action: GETDescribeReservedDBInstancesActionEnum;
    dbInstanceClass?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId?: string;
    version: GETDescribeReservedDBInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeReservedDBInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
