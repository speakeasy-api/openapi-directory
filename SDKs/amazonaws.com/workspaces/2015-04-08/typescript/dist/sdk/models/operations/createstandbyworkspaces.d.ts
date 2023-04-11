import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStandbyWorkspacesXAmzTargetEnum {
    WorkspacesServiceCreateStandbyWorkspaces = "WorkspacesService.CreateStandbyWorkspaces"
}
export declare class CreateStandbyWorkspacesRequest extends SpeakeasyBase {
    createStandbyWorkspacesRequest: shared.CreateStandbyWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStandbyWorkspacesXAmzTargetEnum;
}
export declare class CreateStandbyWorkspacesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createStandbyWorkspacesResult?: shared.CreateStandbyWorkspacesResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
