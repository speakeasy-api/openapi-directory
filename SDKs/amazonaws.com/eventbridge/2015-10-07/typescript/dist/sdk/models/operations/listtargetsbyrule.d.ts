import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTargetsByRuleXAmzTargetEnum {
    AWSEventsListTargetsByRule = "AWSEvents.ListTargetsByRule"
}
export declare class ListTargetsByRuleRequest extends SpeakeasyBase {
    listTargetsByRuleRequest: shared.ListTargetsByRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTargetsByRuleXAmzTargetEnum;
}
export declare class ListTargetsByRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listTargetsByRuleResponse?: shared.ListTargetsByRuleResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
