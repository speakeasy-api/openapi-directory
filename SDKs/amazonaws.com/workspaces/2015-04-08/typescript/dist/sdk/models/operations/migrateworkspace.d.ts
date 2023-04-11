import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MigrateWorkspaceXAmzTargetEnum {
    WorkspacesServiceMigrateWorkspace = "WorkspacesService.MigrateWorkspace"
}
export declare class MigrateWorkspaceRequest extends SpeakeasyBase {
    migrateWorkspaceRequest: shared.MigrateWorkspaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MigrateWorkspaceXAmzTargetEnum;
}
export declare class MigrateWorkspaceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * Success
     */
    migrateWorkspaceResult?: shared.MigrateWorkspaceResult;
    /**
     * OperationInProgressException
     */
    operationInProgressException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
}
