import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartEdgeDeploymentStageXAmzTargetEnum {
    SageMakerStartEdgeDeploymentStage = "SageMaker.StartEdgeDeploymentStage"
}
export declare class StartEdgeDeploymentStageRequest extends SpeakeasyBase {
    startEdgeDeploymentStageRequest: shared.StartEdgeDeploymentStageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEdgeDeploymentStageXAmzTargetEnum;
}
export declare class StartEdgeDeploymentStageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
