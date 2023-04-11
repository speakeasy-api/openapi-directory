import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRulesOfIpGroupXAmzTargetEnum {
    WorkspacesServiceUpdateRulesOfIpGroup = "WorkspacesService.UpdateRulesOfIpGroup"
}
export declare class UpdateRulesOfIpGroupRequest extends SpeakeasyBase {
    updateRulesOfIpGroupRequest: shared.UpdateRulesOfIpGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRulesOfIpGroupXAmzTargetEnum;
}
export declare class UpdateRulesOfIpGroupResponse extends SpeakeasyBase {
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
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateRulesOfIpGroupResult?: Record<string, any>;
}
