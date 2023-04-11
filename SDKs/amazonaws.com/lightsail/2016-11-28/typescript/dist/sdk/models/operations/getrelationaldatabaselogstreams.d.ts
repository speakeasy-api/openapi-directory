import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseLogStreamsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseLogStreams = "Lightsail_20161128.GetRelationalDatabaseLogStreams"
}
export declare class GetRelationalDatabaseLogStreamsRequest extends SpeakeasyBase {
    getRelationalDatabaseLogStreamsRequest: shared.GetRelationalDatabaseLogStreamsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseLogStreamsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseLogStreamsResponse extends SpeakeasyBase {
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
    getRelationalDatabaseLogStreamsResult?: shared.GetRelationalDatabaseLogStreamsResult;
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
