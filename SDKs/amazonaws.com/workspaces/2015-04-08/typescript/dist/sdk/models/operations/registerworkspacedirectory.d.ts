import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterWorkspaceDirectoryXAmzTargetEnum {
    WorkspacesServiceRegisterWorkspaceDirectory = "WorkspacesService.RegisterWorkspaceDirectory"
}
export declare class RegisterWorkspaceDirectoryRequest extends SpeakeasyBase {
    registerWorkspaceDirectoryRequest: shared.RegisterWorkspaceDirectoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterWorkspaceDirectoryXAmzTargetEnum;
}
export declare class RegisterWorkspaceDirectoryResponse extends SpeakeasyBase {
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
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * Success
     */
    registerWorkspaceDirectoryResult?: Record<string, any>;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * UnsupportedNetworkConfigurationException
     */
    unsupportedNetworkConfigurationException?: any;
    /**
     * WorkspacesDefaultRoleNotFoundException
     */
    workspacesDefaultRoleNotFoundException?: any;
}
