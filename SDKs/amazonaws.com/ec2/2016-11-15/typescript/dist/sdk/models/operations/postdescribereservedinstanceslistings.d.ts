import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReservedInstancesListingsActionEnum {
    DescribeReservedInstancesListings = "DescribeReservedInstancesListings"
}
export declare enum POSTDescribeReservedInstancesListingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeReservedInstancesListingsRequest extends SpeakeasyBase {
    action: POSTDescribeReservedInstancesListingsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeReservedInstancesListingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeReservedInstancesListingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
