import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.
 */
export declare class SendHeartbeatRequestBodyDeploymentResult extends SpeakeasyBase {
    deploymentEndTime?: Date;
    deploymentModels?: shared.DeploymentModel[];
    deploymentName?: string;
    deploymentStartTime?: Date;
    deploymentStatus?: string;
    deploymentStatusMessage?: string;
}
export declare class SendHeartbeatRequestBody extends SpeakeasyBase {
    /**
     * For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.
     */
    agentMetrics?: shared.EdgeMetric[];
    /**
     * Returns the version of the agent.
     */
    agentVersion: string;
    /**
     * Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.
     */
    deploymentResult?: SendHeartbeatRequestBodyDeploymentResult;
    /**
     * The name of the fleet that the device belongs to.
     */
    deviceFleetName: string;
    /**
     * The unique name of the device.
     */
    deviceName: string;
    /**
     * Returns a list of models deployed on the the device.
     */
    models?: shared.Model[];
}
export declare class SendHeartbeatRequest extends SpeakeasyBase {
    requestBody: SendHeartbeatRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
