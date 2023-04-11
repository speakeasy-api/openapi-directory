import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreWorkspaceXAmzTargetEnum {
    WorkspacesServiceRestoreWorkspace = "WorkspacesService.RestoreWorkspace"
}
export declare class RestoreWorkspaceRequest extends SpeakeasyBase {
    restoreWorkspaceRequest: shared.RestoreWorkspaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreWorkspaceXAmzTargetEnum;
}
export declare class RestoreWorkspaceResponse extends SpeakeasyBase {
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
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    restoreWorkspaceResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
