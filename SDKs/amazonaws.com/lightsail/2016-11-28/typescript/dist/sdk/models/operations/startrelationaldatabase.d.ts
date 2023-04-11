import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128StartRelationalDatabase = "Lightsail_20161128.StartRelationalDatabase"
}
export declare class StartRelationalDatabaseRequest extends SpeakeasyBase {
    startRelationalDatabaseRequest: shared.StartRelationalDatabaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRelationalDatabaseXAmzTargetEnum;
}
export declare class StartRelationalDatabaseResponse extends SpeakeasyBase {
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
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    startRelationalDatabaseResult?: shared.StartRelationalDatabaseResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
