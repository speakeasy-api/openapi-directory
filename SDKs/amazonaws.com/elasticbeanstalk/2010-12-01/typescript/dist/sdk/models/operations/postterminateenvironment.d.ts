import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTerminateEnvironmentActionEnum {
    TerminateEnvironment = "TerminateEnvironment"
}
export declare enum POSTTerminateEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTTerminateEnvironmentRequest extends SpeakeasyBase {
    action: POSTTerminateEnvironmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTTerminateEnvironmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTerminateEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
