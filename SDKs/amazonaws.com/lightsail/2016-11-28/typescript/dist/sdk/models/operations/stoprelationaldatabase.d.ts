import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128StopRelationalDatabase = "Lightsail_20161128.StopRelationalDatabase"
}
export declare class StopRelationalDatabaseRequest extends SpeakeasyBase {
    stopRelationalDatabaseRequest: shared.StopRelationalDatabaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRelationalDatabaseXAmzTargetEnum;
}
export declare class StopRelationalDatabaseResponse extends SpeakeasyBase {
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
     * Success
     */
    stopRelationalDatabaseResult?: shared.StopRelationalDatabaseResult;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
