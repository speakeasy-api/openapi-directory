import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSuspendProcessesActionEnum {
    SuspendProcesses = "SuspendProcesses"
}
export declare enum POSTSuspendProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTSuspendProcessesRequest extends SpeakeasyBase {
    action: POSTSuspendProcessesActionEnum;
    requestBody?: Uint8Array;
    version: POSTSuspendProcessesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSuspendProcessesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
