import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableRuleXAmzTargetEnum {
    AWSEventsDisableRule = "AWSEvents.DisableRule"
}
export declare class DisableRuleRequest extends SpeakeasyBase {
    disableRuleRequest: shared.DisableRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableRuleXAmzTargetEnum;
}
export declare class DisableRuleResponse extends SpeakeasyBase {
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
