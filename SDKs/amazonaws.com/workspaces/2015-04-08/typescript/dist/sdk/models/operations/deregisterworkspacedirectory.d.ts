import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterWorkspaceDirectoryXAmzTargetEnum {
    WorkspacesServiceDeregisterWorkspaceDirectory = "WorkspacesService.DeregisterWorkspaceDirectory"
}
export declare class DeregisterWorkspaceDirectoryRequest extends SpeakeasyBase {
    deregisterWorkspaceDirectoryRequest: shared.DeregisterWorkspaceDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterWorkspaceDirectoryXAmzTargetEnum;
}
export declare class DeregisterWorkspaceDirectoryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterWorkspaceDirectoryResult?: Record<string, any>;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
