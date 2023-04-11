import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTransformJobXAmzTargetEnum {
    SageMakerStopTransformJob = "SageMaker.StopTransformJob"
}
export declare class StopTransformJobRequest extends SpeakeasyBase {
    stopTransformJobRequest: shared.StopTransformJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTransformJobXAmzTargetEnum;
}
export declare class StopTransformJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
