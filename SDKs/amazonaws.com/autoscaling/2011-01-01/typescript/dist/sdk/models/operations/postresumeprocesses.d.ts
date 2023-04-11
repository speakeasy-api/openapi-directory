import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResumeProcessesActionEnum {
    ResumeProcesses = "ResumeProcesses"
}
export declare enum POSTResumeProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTResumeProcessesRequest extends SpeakeasyBase {
    action: POSTResumeProcessesActionEnum;
    requestBody?: Uint8Array;
    version: POSTResumeProcessesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResumeProcessesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
