import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112CreateRuleGroup = "NetworkFirewall_20201112.CreateRuleGroup"
}
export declare class CreateRuleGroupRequest extends SpeakeasyBase {
    createRuleGroupRequest: shared.CreateRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRuleGroupXAmzTargetEnum;
}
export declare class CreateRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRuleGroupResponse?: shared.CreateRuleGroupResponse;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
