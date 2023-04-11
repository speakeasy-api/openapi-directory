import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkspacesXAmzTargetEnum {
    WorkspacesServiceCreateWorkspaces = "WorkspacesService.CreateWorkspaces"
}
export declare class CreateWorkspacesRequest extends SpeakeasyBase {
    createWorkspacesRequest: shared.CreateWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkspacesXAmzTargetEnum;
}
export declare class CreateWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorkspacesResult?: shared.CreateWorkspacesResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
