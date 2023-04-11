import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceCreateWorkspaceBundle = "WorkspacesService.CreateWorkspaceBundle"
}
export declare class CreateWorkspaceBundleRequest extends SpeakeasyBase {
    createWorkspaceBundleRequest: shared.CreateWorkspaceBundleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkspaceBundleXAmzTargetEnum;
}
export declare class CreateWorkspaceBundleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createWorkspaceBundleResult?: shared.CreateWorkspaceBundleResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
