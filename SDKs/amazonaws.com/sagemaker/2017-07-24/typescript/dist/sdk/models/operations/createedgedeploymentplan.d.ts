import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEdgeDeploymentPlanXAmzTargetEnum {
    SageMakerCreateEdgeDeploymentPlan = "SageMaker.CreateEdgeDeploymentPlan"
}
export declare class CreateEdgeDeploymentPlanRequest extends SpeakeasyBase {
    createEdgeDeploymentPlanRequest: shared.CreateEdgeDeploymentPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEdgeDeploymentPlanXAmzTargetEnum;
}
export declare class CreateEdgeDeploymentPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEdgeDeploymentPlanResponse?: shared.CreateEdgeDeploymentPlanResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
