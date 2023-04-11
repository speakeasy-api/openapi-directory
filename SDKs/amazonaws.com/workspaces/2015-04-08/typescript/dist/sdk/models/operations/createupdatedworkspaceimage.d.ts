import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUpdatedWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceCreateUpdatedWorkspaceImage = "WorkspacesService.CreateUpdatedWorkspaceImage"
}
export declare class CreateUpdatedWorkspaceImageRequest extends SpeakeasyBase {
    createUpdatedWorkspaceImageRequest: shared.CreateUpdatedWorkspaceImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUpdatedWorkspaceImageXAmzTargetEnum;
}
export declare class CreateUpdatedWorkspaceImageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createUpdatedWorkspaceImageResult?: shared.CreateUpdatedWorkspaceImageResult;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
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
}
