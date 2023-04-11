import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTargetsXAmzTargetEnum {
    AWSEventsRemoveTargets = "AWSEvents.RemoveTargets"
}
export declare class RemoveTargetsRequest extends SpeakeasyBase {
    removeTargetsRequest: shared.RemoveTargetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTargetsXAmzTargetEnum;
}
export declare class RemoveTargetsResponse extends SpeakeasyBase {
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
     * Success
     */
    removeTargetsResponse?: shared.RemoveTargetsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
