import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyWorkspacePropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceProperties = "WorkspacesService.ModifyWorkspaceProperties"
}
export declare class ModifyWorkspacePropertiesRequest extends SpeakeasyBase {
    modifyWorkspacePropertiesRequest: shared.ModifyWorkspacePropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspacePropertiesXAmzTargetEnum;
}
export declare class ModifyWorkspacePropertiesResponse extends SpeakeasyBase {
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
     * Success
     */
    modifyWorkspacePropertiesResult?: Record<string, any>;
    /**
     * OperationInProgressException
     */
    operationInProgressException?: any;
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
     * UnsupportedWorkspaceConfigurationException
     */
    unsupportedWorkspaceConfigurationException?: any;
}
