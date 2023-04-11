import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteStackInstancesActionEnum {
    DeleteStackInstances = "DeleteStackInstances"
}
export declare enum POSTDeleteStackInstancesVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDeleteStackInstancesRequest extends SpeakeasyBase {
    action: POSTDeleteStackInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteStackInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteStackInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
