import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateRestoreImageTaskActionEnum {
    CreateRestoreImageTask = "CreateRestoreImageTask"
}
export declare enum POSTCreateRestoreImageTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateRestoreImageTaskRequest extends SpeakeasyBase {
    action: POSTCreateRestoreImageTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateRestoreImageTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateRestoreImageTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
