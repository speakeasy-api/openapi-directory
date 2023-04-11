import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopQueryExecutionXAmzTargetEnum {
    AmazonAthenaStopQueryExecution = "AmazonAthena.StopQueryExecution"
}
export declare class StopQueryExecutionRequest extends SpeakeasyBase {
    stopQueryExecutionInput: shared.StopQueryExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopQueryExecutionXAmzTargetEnum;
}
export declare class StopQueryExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopQueryExecutionOutput?: Record<string, any>;
}
