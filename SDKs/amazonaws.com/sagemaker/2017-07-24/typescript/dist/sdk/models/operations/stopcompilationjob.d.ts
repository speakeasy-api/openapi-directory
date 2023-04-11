import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopCompilationJobXAmzTargetEnum {
    SageMakerStopCompilationJob = "SageMaker.StopCompilationJob"
}
export declare class StopCompilationJobRequest extends SpeakeasyBase {
    stopCompilationJobRequest: shared.StopCompilationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCompilationJobXAmzTargetEnum;
}
export declare class StopCompilationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
