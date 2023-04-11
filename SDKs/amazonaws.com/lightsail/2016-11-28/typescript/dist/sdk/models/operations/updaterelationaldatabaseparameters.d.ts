import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRelationalDatabaseParametersXAmzTargetEnum {
    Lightsail20161128UpdateRelationalDatabaseParameters = "Lightsail_20161128.UpdateRelationalDatabaseParameters"
}
export declare class UpdateRelationalDatabaseParametersRequest extends SpeakeasyBase {
    updateRelationalDatabaseParametersRequest: shared.UpdateRelationalDatabaseParametersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRelationalDatabaseParametersXAmzTargetEnum;
}
export declare class UpdateRelationalDatabaseParametersResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
    /**
     * Success
     */
    updateRelationalDatabaseParametersResult?: shared.UpdateRelationalDatabaseParametersResult;
}
