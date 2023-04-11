import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartCalculationExecutionXAmzTargetEnum {
    AmazonAthenaStartCalculationExecution = "AmazonAthena.StartCalculationExecution"
}
export declare class StartCalculationExecutionRequest extends SpeakeasyBase {
    startCalculationExecutionRequest: shared.StartCalculationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCalculationExecutionXAmzTargetEnum;
}
export declare class StartCalculationExecutionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startCalculationExecutionResponse?: shared.StartCalculationExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
