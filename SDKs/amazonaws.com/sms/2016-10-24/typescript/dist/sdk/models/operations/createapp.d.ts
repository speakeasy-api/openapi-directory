import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAppXAmzTargetEnum {
    AWSServerMigrationServiceV20161024CreateApp = "AWSServerMigrationService_V2016_10_24.CreateApp"
}
export declare class CreateAppRequest extends SpeakeasyBase {
    createAppRequest: shared.CreateAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppXAmzTargetEnum;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAppResponse?: shared.CreateAppResponse;
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
