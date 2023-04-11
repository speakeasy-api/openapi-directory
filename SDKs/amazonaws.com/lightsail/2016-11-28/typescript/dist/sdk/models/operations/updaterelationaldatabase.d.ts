import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128UpdateRelationalDatabase = "Lightsail_20161128.UpdateRelationalDatabase"
}
export declare class UpdateRelationalDatabaseRequest extends SpeakeasyBase {
    updateRelationalDatabaseRequest: shared.UpdateRelationalDatabaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRelationalDatabaseXAmzTargetEnum;
}
export declare class UpdateRelationalDatabaseResponse extends SpeakeasyBase {
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
    updateRelationalDatabaseResult?: shared.UpdateRelationalDatabaseResult;
}
