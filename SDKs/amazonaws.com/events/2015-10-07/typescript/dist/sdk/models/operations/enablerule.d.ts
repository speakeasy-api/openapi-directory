import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableRuleXAmzTargetEnum {
    AWSEventsEnableRule = "AWSEvents.EnableRule"
}
export declare class EnableRuleRequest extends SpeakeasyBase {
    enableRuleRequest: shared.EnableRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableRuleXAmzTargetEnum;
}
export declare class EnableRuleResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * ManagedRuleException
     */
    managedRuleException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
