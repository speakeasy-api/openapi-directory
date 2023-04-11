import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopCalculationExecutionXAmzTargetEnum {
    AmazonAthenaStopCalculationExecution = "AmazonAthena.StopCalculationExecution"
}
export declare class StopCalculationExecutionRequest extends SpeakeasyBase {
    stopCalculationExecutionRequest: shared.StopCalculationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCalculationExecutionXAmzTargetEnum;
}
export declare class StopCalculationExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopCalculationExecutionResponse?: shared.StopCalculationExecutionResponse;
}
