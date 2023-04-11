import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseLogEventsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseLogEvents = "Lightsail_20161128.GetRelationalDatabaseLogEvents"
}
export declare class GetRelationalDatabaseLogEventsRequest extends SpeakeasyBase {
    getRelationalDatabaseLogEventsRequest: shared.GetRelationalDatabaseLogEventsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseLogEventsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseLogEventsResponse extends SpeakeasyBase {
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
    getRelationalDatabaseLogEventsResult?: shared.GetRelationalDatabaseLogEventsResult;
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
