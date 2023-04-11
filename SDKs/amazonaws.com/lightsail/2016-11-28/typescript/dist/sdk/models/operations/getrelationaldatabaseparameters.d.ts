import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseParametersXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseParameters = "Lightsail_20161128.GetRelationalDatabaseParameters"
}
export declare class GetRelationalDatabaseParametersRequest extends SpeakeasyBase {
    getRelationalDatabaseParametersRequest: shared.GetRelationalDatabaseParametersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseParametersXAmzTargetEnum;
}
export declare class GetRelationalDatabaseParametersResponse extends SpeakeasyBase {
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
     * Success
     */
    getRelationalDatabaseParametersResult?: shared.GetRelationalDatabaseParametersResult;
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
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
