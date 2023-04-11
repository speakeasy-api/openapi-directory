import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeReservedDBInstancesOfferingsActionEnum {
    DescribeReservedDBInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}
export declare enum GETDescribeReservedDBInstancesOfferingsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeReservedDBInstancesOfferingsRequest extends SpeakeasyBase {
    action: GETDescribeReservedDBInstancesOfferingsActionEnum;
    dbInstanceClass?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDBInstancesOfferingId?: string;
    version: GETDescribeReservedDBInstancesOfferingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeReservedDBInstancesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
