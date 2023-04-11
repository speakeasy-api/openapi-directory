import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateChangeSetXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GenerateChangeSet = "AWSServerMigrationService_V2016_10_24.GenerateChangeSet"
}
export declare class GenerateChangeSetRequest extends SpeakeasyBase {
    generateChangeSetRequest: shared.GenerateChangeSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateChangeSetXAmzTargetEnum;
}
export declare class GenerateChangeSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    generateChangeSetResponse?: shared.GenerateChangeSetResponse;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
