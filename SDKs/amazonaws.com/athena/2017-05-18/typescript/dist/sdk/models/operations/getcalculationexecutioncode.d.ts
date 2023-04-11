import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCalculationExecutionCodeXAmzTargetEnum {
    AmazonAthenaGetCalculationExecutionCode = "AmazonAthena.GetCalculationExecutionCode"
}
export declare class GetCalculationExecutionCodeRequest extends SpeakeasyBase {
    getCalculationExecutionCodeRequest: shared.GetCalculationExecutionCodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCalculationExecutionCodeXAmzTargetEnum;
}
export declare class GetCalculationExecutionCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCalculationExecutionCodeResponse?: shared.GetCalculationExecutionCodeResponse;
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
