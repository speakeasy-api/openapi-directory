import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceUpdateWorkspaceBundle = "WorkspacesService.UpdateWorkspaceBundle"
}
export declare class UpdateWorkspaceBundleRequest extends SpeakeasyBase {
    updateWorkspaceBundleRequest: shared.UpdateWorkspaceBundleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkspaceBundleXAmzTargetEnum;
}
export declare class UpdateWorkspaceBundleResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    /**
     * Success
     */
    updateWorkspaceBundleResult?: Record<string, any>;
}
