import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAppValidationOutputXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetAppValidationOutput = "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput"
}
export declare class GetAppValidationOutputRequest extends SpeakeasyBase {
    getAppValidationOutputRequest: shared.GetAppValidationOutputRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppValidationOutputXAmzTargetEnum;
}
export declare class GetAppValidationOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAppValidationOutputResponse?: shared.GetAppValidationOutputResponse;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
