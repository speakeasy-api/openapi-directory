import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConnectClientAddInXAmzTargetEnum {
    WorkspacesServiceCreateConnectClientAddIn = "WorkspacesService.CreateConnectClientAddIn"
}
export declare class CreateConnectClientAddInRequest extends SpeakeasyBase {
    createConnectClientAddInRequest: shared.CreateConnectClientAddInRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectClientAddInXAmzTargetEnum;
}
export declare class CreateConnectClientAddInResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectClientAddInResult?: shared.CreateConnectClientAddInResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceCreationFailedException
     */
    resourceCreationFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
