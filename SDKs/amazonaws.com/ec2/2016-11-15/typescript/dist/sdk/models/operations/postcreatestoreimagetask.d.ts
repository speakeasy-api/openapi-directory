import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateStoreImageTaskActionEnum {
    CreateStoreImageTask = "CreateStoreImageTask"
}
export declare enum POSTCreateStoreImageTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateStoreImageTaskRequest extends SpeakeasyBase {
    action: POSTCreateStoreImageTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateStoreImageTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateStoreImageTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
