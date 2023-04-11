import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRebootInstancesActionEnum {
    RebootInstances = "RebootInstances"
}
export declare enum POSTRebootInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRebootInstancesRequest extends SpeakeasyBase {
    action: POSTRebootInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTRebootInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRebootInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
