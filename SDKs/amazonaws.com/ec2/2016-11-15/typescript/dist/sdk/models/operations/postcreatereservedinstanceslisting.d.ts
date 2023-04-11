import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateReservedInstancesListingActionEnum {
    CreateReservedInstancesListing = "CreateReservedInstancesListing"
}
export declare enum POSTCreateReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateReservedInstancesListingRequest extends SpeakeasyBase {
    action: POSTCreateReservedInstancesListingActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateReservedInstancesListingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateReservedInstancesListingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
