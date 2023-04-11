import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterCrossAccountAccessRoleXAmzTargetEnum {
    InspectorServiceRegisterCrossAccountAccessRole = "InspectorService.RegisterCrossAccountAccessRole"
}
export declare class RegisterCrossAccountAccessRoleRequest extends SpeakeasyBase {
    registerCrossAccountAccessRoleRequest: shared.RegisterCrossAccountAccessRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterCrossAccountAccessRoleXAmzTargetEnum;
}
export declare class RegisterCrossAccountAccessRoleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidCrossAccountRoleException
     */
    invalidCrossAccountRoleException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
