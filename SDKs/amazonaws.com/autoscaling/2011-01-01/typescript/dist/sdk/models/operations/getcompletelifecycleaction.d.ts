import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCompleteLifecycleActionActionEnum {
    CompleteLifecycleAction = "CompleteLifecycleAction"
}
export declare enum GETCompleteLifecycleActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETCompleteLifecycleActionRequest extends SpeakeasyBase {
    action: GETCompleteLifecycleActionActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The ID of the instance.
     */
    instanceId?: string;
    /**
     * The action for the group to take. You can specify either <code>CONTINUE</code> or <code>ABANDON</code>.
     */
    lifecycleActionResult: string;
    /**
     * A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.
     */
    lifecycleActionToken?: string;
    /**
     * The name of the lifecycle hook.
     */
    lifecycleHookName: string;
    version: GETCompleteLifecycleActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCompleteLifecycleActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
