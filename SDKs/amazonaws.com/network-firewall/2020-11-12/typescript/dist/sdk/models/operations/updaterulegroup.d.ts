import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112UpdateRuleGroup = "NetworkFirewall_20201112.UpdateRuleGroup"
}
export declare class UpdateRuleGroupRequest extends SpeakeasyBase {
    updateRuleGroupRequest: shared.UpdateRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRuleGroupXAmzTargetEnum;
}
export declare class UpdateRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateRuleGroupResponse?: shared.UpdateRuleGroupResponse;
}
