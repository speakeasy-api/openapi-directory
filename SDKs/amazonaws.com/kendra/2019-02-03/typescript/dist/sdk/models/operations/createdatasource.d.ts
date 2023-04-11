import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataSourceXAmzTargetEnum {
    AWSKendraFrontendServiceCreateDataSource = "AWSKendraFrontendService.CreateDataSource"
}
export declare class CreateDataSourceRequest extends SpeakeasyBase {
    createDataSourceRequest: shared.CreateDataSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceXAmzTargetEnum;
}
export declare class CreateDataSourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createDataSourceResponse?: shared.CreateDataSourceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceAlreadyExistException
     */
    resourceAlreadyExistException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
