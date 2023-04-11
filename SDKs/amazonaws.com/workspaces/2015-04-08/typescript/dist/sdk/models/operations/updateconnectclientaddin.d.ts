import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateConnectClientAddInXAmzTargetEnum {
    WorkspacesServiceUpdateConnectClientAddIn = "WorkspacesService.UpdateConnectClientAddIn"
}
export declare class UpdateConnectClientAddInRequest extends SpeakeasyBase {
    updateConnectClientAddInRequest: shared.UpdateConnectClientAddInRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConnectClientAddInXAmzTargetEnum;
}
export declare class UpdateConnectClientAddInResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateConnectClientAddInResult?: Record<string, any>;
}
