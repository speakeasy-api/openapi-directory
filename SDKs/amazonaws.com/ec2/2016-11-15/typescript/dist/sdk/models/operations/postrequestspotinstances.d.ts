import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRequestSpotInstancesActionEnum {
    RequestSpotInstances = "RequestSpotInstances"
}
export declare enum POSTRequestSpotInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRequestSpotInstancesRequest extends SpeakeasyBase {
    action: POSTRequestSpotInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTRequestSpotInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRequestSpotInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
