import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRunScheduledInstancesActionEnum {
    RunScheduledInstances = "RunScheduledInstances"
}
export declare enum POSTRunScheduledInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRunScheduledInstancesRequest extends SpeakeasyBase {
    action: POSTRunScheduledInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTRunScheduledInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRunScheduledInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
