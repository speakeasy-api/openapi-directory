import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEdgeDeploymentPlanXAmzTargetEnum {
    SageMakerDeleteEdgeDeploymentPlan = "SageMaker.DeleteEdgeDeploymentPlan"
}
export declare class DeleteEdgeDeploymentPlanRequest extends SpeakeasyBase {
    deleteEdgeDeploymentPlanRequest: shared.DeleteEdgeDeploymentPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEdgeDeploymentPlanXAmzTargetEnum;
}
export declare class DeleteEdgeDeploymentPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
