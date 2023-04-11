import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBInstancesActionEnum {
    DescribeDBInstances = "DescribeDBInstances"
}
export declare enum GETDescribeDBInstancesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDescribeDBInstancesRequest extends SpeakeasyBase {
    action: GETDescribeDBInstancesActionEnum;
    dbInstanceIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeDBInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
