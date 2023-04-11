import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceDeleteWorkspaceBundle = "WorkspacesService.DeleteWorkspaceBundle"
}
export declare class DeleteWorkspaceBundleRequest extends SpeakeasyBase {
    deleteWorkspaceBundleRequest: shared.DeleteWorkspaceBundleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkspaceBundleXAmzTargetEnum;
}
export declare class DeleteWorkspaceBundleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteWorkspaceBundleResult?: Record<string, any>;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceAssociatedException
     */
    resourceAssociatedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
