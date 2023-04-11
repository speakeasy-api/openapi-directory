import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRuleXAmzTargetEnum {
    AWSEventsDeleteRule = "AWSEvents.DeleteRule"
}
export declare class DeleteRuleRequest extends SpeakeasyBase {
    deleteRuleRequest: shared.DeleteRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRuleXAmzTargetEnum;
}
export declare class DeleteRuleResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
