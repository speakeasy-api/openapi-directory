import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutLifecycleHookActionEnum {
    PutLifecycleHook = "PutLifecycleHook"
}
export declare enum POSTPutLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTPutLifecycleHookRequest extends SpeakeasyBase {
    action: POSTPutLifecycleHookActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutLifecycleHookVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutLifecycleHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
