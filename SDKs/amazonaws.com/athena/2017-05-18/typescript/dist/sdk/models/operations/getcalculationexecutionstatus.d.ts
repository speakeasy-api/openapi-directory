import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCalculationExecutionStatusXAmzTargetEnum {
    AmazonAthenaGetCalculationExecutionStatus = "AmazonAthena.GetCalculationExecutionStatus"
}
export declare class GetCalculationExecutionStatusRequest extends SpeakeasyBase {
    getCalculationExecutionStatusRequest: shared.GetCalculationExecutionStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCalculationExecutionStatusXAmzTargetEnum;
}
export declare class GetCalculationExecutionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCalculationExecutionStatusResponse?: shared.GetCalculationExecutionStatusResponse;
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
