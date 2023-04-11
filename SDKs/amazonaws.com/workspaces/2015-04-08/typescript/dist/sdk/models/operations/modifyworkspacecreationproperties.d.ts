import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyWorkspaceCreationPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceCreationProperties = "WorkspacesService.ModifyWorkspaceCreationProperties"
}
export declare class ModifyWorkspaceCreationPropertiesRequest extends SpeakeasyBase {
    modifyWorkspaceCreationPropertiesRequest: shared.ModifyWorkspaceCreationPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspaceCreationPropertiesXAmzTargetEnum;
}
export declare class ModifyWorkspaceCreationPropertiesResponse extends SpeakeasyBase {
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
    modifyWorkspaceCreationPropertiesResult?: Record<string, any>;
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
}
