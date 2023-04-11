import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachInstancesActionEnum {
    DetachInstances = "DetachInstances"
}
export declare enum POSTDetachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDetachInstancesRequest extends SpeakeasyBase {
    action: POSTDetachInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
