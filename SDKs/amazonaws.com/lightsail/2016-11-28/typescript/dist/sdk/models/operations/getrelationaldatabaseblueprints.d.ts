import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseBlueprintsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseBlueprints = "Lightsail_20161128.GetRelationalDatabaseBlueprints"
}
export declare class GetRelationalDatabaseBlueprintsRequest extends SpeakeasyBase {
    getRelationalDatabaseBlueprintsRequest: shared.GetRelationalDatabaseBlueprintsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseBlueprintsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseBlueprintsResponse extends SpeakeasyBase {
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
    getRelationalDatabaseBlueprintsResult?: shared.GetRelationalDatabaseBlueprintsResult;
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
