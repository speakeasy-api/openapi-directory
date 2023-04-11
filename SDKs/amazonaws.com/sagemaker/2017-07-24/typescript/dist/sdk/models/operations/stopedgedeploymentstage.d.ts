import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopEdgeDeploymentStageXAmzTargetEnum {
    SageMakerStopEdgeDeploymentStage = "SageMaker.StopEdgeDeploymentStage"
}
export declare class StopEdgeDeploymentStageRequest extends SpeakeasyBase {
    stopEdgeDeploymentStageRequest: shared.StopEdgeDeploymentStageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEdgeDeploymentStageXAmzTargetEnum;
}
export declare class StopEdgeDeploymentStageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
