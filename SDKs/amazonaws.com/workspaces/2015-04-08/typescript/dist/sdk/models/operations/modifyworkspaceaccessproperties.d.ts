import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyWorkspaceAccessPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceAccessProperties = "WorkspacesService.ModifyWorkspaceAccessProperties"
}
export declare class ModifyWorkspaceAccessPropertiesRequest extends SpeakeasyBase {
    modifyWorkspaceAccessPropertiesRequest: shared.ModifyWorkspaceAccessPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspaceAccessPropertiesXAmzTargetEnum;
}
export declare class ModifyWorkspaceAccessPropertiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    modifyWorkspaceAccessPropertiesResult?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
