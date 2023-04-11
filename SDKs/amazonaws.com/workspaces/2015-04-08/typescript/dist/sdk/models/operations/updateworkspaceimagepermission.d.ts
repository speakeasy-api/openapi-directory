import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWorkspaceImagePermissionXAmzTargetEnum {
    WorkspacesServiceUpdateWorkspaceImagePermission = "WorkspacesService.UpdateWorkspaceImagePermission"
}
export declare class UpdateWorkspaceImagePermissionRequest extends SpeakeasyBase {
    updateWorkspaceImagePermissionRequest: shared.UpdateWorkspaceImagePermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkspaceImagePermissionXAmzTargetEnum;
}
export declare class UpdateWorkspaceImagePermissionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateWorkspaceImagePermissionResult?: Record<string, any>;
}
