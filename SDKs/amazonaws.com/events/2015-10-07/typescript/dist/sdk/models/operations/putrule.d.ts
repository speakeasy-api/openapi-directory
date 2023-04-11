import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRuleXAmzTargetEnum {
    AWSEventsPutRule = "AWSEvents.PutRule"
}
export declare class PutRuleRequest extends SpeakeasyBase {
    putRuleRequest: shared.PutRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRuleXAmzTargetEnum;
}
export declare class PutRuleResponse extends SpeakeasyBase {
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
     * InvalidEventPatternException
     */
    invalidEventPatternException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ManagedRuleException
     */
    managedRuleException?: any;
    /**
     * Success
     */
    putRuleResponse?: shared.PutRuleResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
