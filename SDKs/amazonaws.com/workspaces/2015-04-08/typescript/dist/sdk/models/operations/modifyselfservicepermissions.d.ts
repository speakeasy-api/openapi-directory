import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifySelfservicePermissionsXAmzTargetEnum {
    WorkspacesServiceModifySelfservicePermissions = "WorkspacesService.ModifySelfservicePermissions"
}
export declare class ModifySelfservicePermissionsRequest extends SpeakeasyBase {
    modifySelfservicePermissionsRequest: shared.ModifySelfservicePermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifySelfservicePermissionsXAmzTargetEnum;
}
export declare class ModifySelfservicePermissionsResponse extends SpeakeasyBase {
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
     * Success
     */
    modifySelfservicePermissionsResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
