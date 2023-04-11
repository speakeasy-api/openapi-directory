import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportMigrationTaskXAmzTargetEnum {
    AWSMigrationHubImportMigrationTask = "AWSMigrationHub.ImportMigrationTask"
}
export declare class ImportMigrationTaskRequest extends SpeakeasyBase {
    importMigrationTaskRequest: shared.ImportMigrationTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportMigrationTaskXAmzTargetEnum;
}
export declare class ImportMigrationTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DryRunOperation
     */
    dryRunOperation?: any;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * Success
     */
    importMigrationTaskResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedOperation
     */
    unauthorizedOperation?: any;
}
