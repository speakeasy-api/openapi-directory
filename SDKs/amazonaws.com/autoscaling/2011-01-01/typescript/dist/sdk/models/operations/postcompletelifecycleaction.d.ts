import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCompleteLifecycleActionActionEnum {
    CompleteLifecycleAction = "CompleteLifecycleAction"
}
export declare enum POSTCompleteLifecycleActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTCompleteLifecycleActionRequest extends SpeakeasyBase {
    action: POSTCompleteLifecycleActionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCompleteLifecycleActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCompleteLifecycleActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
