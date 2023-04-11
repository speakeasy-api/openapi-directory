import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopStreamProcessorXAmzTargetEnum {
    RekognitionServiceStopStreamProcessor = "RekognitionService.StopStreamProcessor"
}
export declare class StopStreamProcessorRequest extends SpeakeasyBase {
    stopStreamProcessorRequest: shared.StopStreamProcessorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopStreamProcessorXAmzTargetEnum;
}
export declare class StopStreamProcessorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopStreamProcessorResponse?: Record<string, any>;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
