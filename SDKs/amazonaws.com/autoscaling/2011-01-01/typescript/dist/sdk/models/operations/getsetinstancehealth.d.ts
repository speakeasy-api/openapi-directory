import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetInstanceHealthActionEnum {
    SetInstanceHealth = "SetInstanceHealth"
}
export declare enum GETSetInstanceHealthVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETSetInstanceHealthRequest extends SpeakeasyBase {
    action: GETSetInstanceHealthActionEnum;
    /**
     * The health status of the instance. Set to <code>Healthy</code> to have the instance remain in service. Set to <code>Unhealthy</code> to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.
     */
    healthStatus: string;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    /**
     * <p>If the Auto Scaling group of the specified instance has a <code>HealthCheckGracePeriod</code> specified for the group, by default, this call respects the grace period. Set this to <code>False</code>, to have the call not respect the grace period associated with the group.</p> <p>For more information about the health check grace period, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html">CreateAutoScalingGroup</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p>
     */
    shouldRespectGracePeriod?: boolean;
    version: GETSetInstanceHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetInstanceHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
