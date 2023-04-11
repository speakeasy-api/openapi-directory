import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateConnectionAliasPermissionXAmzTargetEnum {
    WorkspacesServiceUpdateConnectionAliasPermission = "WorkspacesService.UpdateConnectionAliasPermission"
}
export declare class UpdateConnectionAliasPermissionRequest extends SpeakeasyBase {
    updateConnectionAliasPermissionRequest: shared.UpdateConnectionAliasPermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConnectionAliasPermissionXAmzTargetEnum;
}
export declare class UpdateConnectionAliasPermissionResponse extends SpeakeasyBase {
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
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceAssociatedException
     */
    resourceAssociatedException?: any;
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
    /**
     * Success
     */
    updateConnectionAliasPermissionResult?: Record<string, any>;
}
