import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyWorkspaceStateXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceState = "WorkspacesService.ModifyWorkspaceState"
}
export declare class ModifyWorkspaceStateRequest extends SpeakeasyBase {
    modifyWorkspaceStateRequest: shared.ModifyWorkspaceStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspaceStateXAmzTargetEnum;
}
export declare class ModifyWorkspaceStateResponse extends SpeakeasyBase {
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
    modifyWorkspaceStateResult?: Record<string, any>;
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
