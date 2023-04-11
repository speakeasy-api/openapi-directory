import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelBundleTaskActionEnum {
    CancelBundleTask = "CancelBundleTask"
}
export declare enum POSTCancelBundleTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelBundleTaskRequest extends SpeakeasyBase {
    action: POSTCancelBundleTaskActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelBundleTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelBundleTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
