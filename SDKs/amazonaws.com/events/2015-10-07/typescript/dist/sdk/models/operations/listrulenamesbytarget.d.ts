import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRuleNamesByTargetXAmzTargetEnum {
    AWSEventsListRuleNamesByTarget = "AWSEvents.ListRuleNamesByTarget"
}
export declare class ListRuleNamesByTargetRequest extends SpeakeasyBase {
    listRuleNamesByTargetRequest: shared.ListRuleNamesByTargetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRuleNamesByTargetXAmzTargetEnum;
}
export declare class ListRuleNamesByTargetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listRuleNamesByTargetResponse?: shared.ListRuleNamesByTargetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
