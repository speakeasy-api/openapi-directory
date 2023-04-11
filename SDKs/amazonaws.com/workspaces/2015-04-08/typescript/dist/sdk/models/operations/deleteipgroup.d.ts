import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteIpGroupXAmzTargetEnum {
    WorkspacesServiceDeleteIpGroup = "WorkspacesService.DeleteIpGroup"
}
export declare class DeleteIpGroupRequest extends SpeakeasyBase {
    deleteIpGroupRequest: shared.DeleteIpGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIpGroupXAmzTargetEnum;
}
export declare class DeleteIpGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteIpGroupResult?: Record<string, any>;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceAssociatedException
     */
    resourceAssociatedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
