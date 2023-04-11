import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateTemplateXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GenerateTemplate = "AWSServerMigrationService_V2016_10_24.GenerateTemplate"
}
export declare class GenerateTemplateRequest extends SpeakeasyBase {
    generateTemplateRequest: shared.GenerateTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateTemplateXAmzTargetEnum;
}
export declare class GenerateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    generateTemplateResponse?: shared.GenerateTemplateResponse;
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
