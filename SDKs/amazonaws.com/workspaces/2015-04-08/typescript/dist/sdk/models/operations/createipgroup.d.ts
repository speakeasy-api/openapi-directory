import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateIpGroupXAmzTargetEnum {
    WorkspacesServiceCreateIpGroup = "WorkspacesService.CreateIpGroup"
}
export declare class CreateIpGroupRequest extends SpeakeasyBase {
    createIpGroupRequest: shared.CreateIpGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIpGroupXAmzTargetEnum;
}
export declare class CreateIpGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createIpGroupResult?: shared.CreateIpGroupResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceCreationFailedException
     */
    resourceCreationFailedException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
}
