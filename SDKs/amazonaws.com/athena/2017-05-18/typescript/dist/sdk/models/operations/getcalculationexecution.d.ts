import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCalculationExecutionXAmzTargetEnum {
    AmazonAthenaGetCalculationExecution = "AmazonAthena.GetCalculationExecution"
}
export declare class GetCalculationExecutionRequest extends SpeakeasyBase {
    getCalculationExecutionRequest: shared.GetCalculationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCalculationExecutionXAmzTargetEnum;
}
export declare class GetCalculationExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCalculationExecutionResponse?: shared.GetCalculationExecutionResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
