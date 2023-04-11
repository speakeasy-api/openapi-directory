import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartQueryExecutionXAmzTargetEnum {
    AmazonAthenaStartQueryExecution = "AmazonAthena.StartQueryExecution"
}
export declare class StartQueryExecutionRequest extends SpeakeasyBase {
    startQueryExecutionInput: shared.StartQueryExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartQueryExecutionXAmzTargetEnum;
}
export declare class StartQueryExecutionResponse extends SpeakeasyBase {
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
     * Success
     */
    startQueryExecutionOutput?: shared.StartQueryExecutionOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
