import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DeleteApp = "AWSServerMigrationService_V2016_10_24.DeleteApp"
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    deleteAppRequest: shared.DeleteAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppXAmzTargetEnum;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAppResponse?: Record<string, any>;
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
