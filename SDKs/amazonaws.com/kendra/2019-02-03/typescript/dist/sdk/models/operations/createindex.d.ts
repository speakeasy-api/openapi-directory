import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateIndexXAmzTargetEnum {
    AWSKendraFrontendServiceCreateIndex = "AWSKendraFrontendService.CreateIndex"
}
export declare class CreateIndexRequest extends SpeakeasyBase {
    createIndexRequest: shared.CreateIndexRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIndexXAmzTargetEnum;
}
export declare class CreateIndexResponse extends SpeakeasyBase {
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
    createIndexResponse?: shared.CreateIndexResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceAlreadyExistException
     */
    resourceAlreadyExistException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
