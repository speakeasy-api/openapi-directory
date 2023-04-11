import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTerminateInstancesActionEnum {
    TerminateInstances = "TerminateInstances"
}
export declare enum POSTTerminateInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTTerminateInstancesRequest extends SpeakeasyBase {
    action: POSTTerminateInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTTerminateInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTerminateInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
