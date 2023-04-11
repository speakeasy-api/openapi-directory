import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConnectClientAddInXAmzTargetEnum {
    WorkspacesServiceDeleteConnectClientAddIn = "WorkspacesService.DeleteConnectClientAddIn"
}
export declare class DeleteConnectClientAddInRequest extends SpeakeasyBase {
    deleteConnectClientAddInRequest: shared.DeleteConnectClientAddInRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectClientAddInXAmzTargetEnum;
}
export declare class DeleteConnectClientAddInResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteConnectClientAddInResult?: Record<string, any>;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
