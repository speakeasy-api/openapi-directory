import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseMasterUserPassword = "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword"
}
export declare class GetRelationalDatabaseMasterUserPasswordRequest extends SpeakeasyBase {
    getRelationalDatabaseMasterUserPasswordRequest: shared.GetRelationalDatabaseMasterUserPasswordRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum;
}
export declare class GetRelationalDatabaseMasterUserPasswordResponse extends SpeakeasyBase {
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
    getRelationalDatabaseMasterUserPasswordResult?: shared.GetRelationalDatabaseMasterUserPasswordResult;
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
