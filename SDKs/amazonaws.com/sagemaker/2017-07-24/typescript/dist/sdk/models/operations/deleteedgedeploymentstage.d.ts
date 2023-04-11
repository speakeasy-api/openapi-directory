import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEdgeDeploymentStageXAmzTargetEnum {
    SageMakerDeleteEdgeDeploymentStage = "SageMaker.DeleteEdgeDeploymentStage"
}
export declare class DeleteEdgeDeploymentStageRequest extends SpeakeasyBase {
    deleteEdgeDeploymentStageRequest: shared.DeleteEdgeDeploymentStageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEdgeDeploymentStageXAmzTargetEnum;
}
export declare class DeleteEdgeDeploymentStageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
