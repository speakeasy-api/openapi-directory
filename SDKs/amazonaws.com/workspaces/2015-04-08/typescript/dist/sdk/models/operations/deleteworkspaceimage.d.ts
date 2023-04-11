import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceDeleteWorkspaceImage = "WorkspacesService.DeleteWorkspaceImage"
}
export declare class DeleteWorkspaceImageRequest extends SpeakeasyBase {
    deleteWorkspaceImageRequest: shared.DeleteWorkspaceImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkspaceImageXAmzTargetEnum;
}
export declare class DeleteWorkspaceImageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteWorkspaceImageResult?: Record<string, any>;
    /**
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * ResourceAssociatedException
     */
    resourceAssociatedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
