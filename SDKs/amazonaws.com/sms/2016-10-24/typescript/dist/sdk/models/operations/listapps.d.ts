import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAppsXAmzTargetEnum {
    AWSServerMigrationServiceV20161024ListApps = "AWSServerMigrationService_V2016_10_24.ListApps"
}
export declare class ListAppsRequest extends SpeakeasyBase {
    listAppsRequest: shared.ListAppsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAppsXAmzTargetEnum;
}
export declare class ListAppsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listAppsResponse?: shared.ListAppsResponse;
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
