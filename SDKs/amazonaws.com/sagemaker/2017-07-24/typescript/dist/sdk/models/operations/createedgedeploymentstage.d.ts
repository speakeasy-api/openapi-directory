import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEdgeDeploymentStageXAmzTargetEnum {
    SageMakerCreateEdgeDeploymentStage = "SageMaker.CreateEdgeDeploymentStage"
}
export declare class CreateEdgeDeploymentStageRequest extends SpeakeasyBase {
    createEdgeDeploymentStageRequest: shared.CreateEdgeDeploymentStageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEdgeDeploymentStageXAmzTargetEnum;
}
export declare class CreateEdgeDeploymentStageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
