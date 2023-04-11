import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReservedDBInstancesOfferingsActionEnum {
    DescribeReservedDBInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}
export declare enum POSTDescribeReservedDBInstancesOfferingsVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTDescribeReservedDBInstancesOfferingsRequest extends SpeakeasyBase {
    action: POSTDescribeReservedDBInstancesOfferingsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeReservedDBInstancesOfferingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeReservedDBInstancesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
