import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelReservedInstancesListingActionEnum {
    CancelReservedInstancesListing = "CancelReservedInstancesListing"
}
export declare enum POSTCancelReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelReservedInstancesListingRequest extends SpeakeasyBase {
    action: POSTCancelReservedInstancesListingActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelReservedInstancesListingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelReservedInstancesListingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
