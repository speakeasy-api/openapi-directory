import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteLifecycleHookActionEnum {
    DeleteLifecycleHook = "DeleteLifecycleHook"
}
export declare enum GETDeleteLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDeleteLifecycleHookRequest extends SpeakeasyBase {
    action: GETDeleteLifecycleHookActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The name of the lifecycle hook.
     */
    lifecycleHookName: string;
    version: GETDeleteLifecycleHookVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteLifecycleHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
