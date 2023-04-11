import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112DeleteRuleGroup = "NetworkFirewall_20201112.DeleteRuleGroup"
}
export declare class DeleteRuleGroupRequest extends SpeakeasyBase {
    deleteRuleGroupRequest: shared.DeleteRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRuleGroupXAmzTargetEnum;
}
export declare class DeleteRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRuleGroupResponse?: shared.DeleteRuleGroupResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
