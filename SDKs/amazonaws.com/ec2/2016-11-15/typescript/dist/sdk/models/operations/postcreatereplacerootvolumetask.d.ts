import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateReplaceRootVolumeTaskActionEnum {
    CreateReplaceRootVolumeTask = "CreateReplaceRootVolumeTask"
}
export declare enum POSTCreateReplaceRootVolumeTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateReplaceRootVolumeTaskRequest extends SpeakeasyBase {
    action: POSTCreateReplaceRootVolumeTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateReplaceRootVolumeTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateReplaceRootVolumeTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
