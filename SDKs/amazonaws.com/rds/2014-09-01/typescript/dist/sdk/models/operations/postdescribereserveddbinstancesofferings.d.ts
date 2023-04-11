import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReservedDBInstancesOfferingsActionEnum {
    DescribeReservedDBInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}
export declare enum POSTDescribeReservedDBInstancesOfferingsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeReservedDBInstancesOfferingsRequest extends SpeakeasyBase {
    action: POSTDescribeReservedDBInstancesOfferingsActionEnum;
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
