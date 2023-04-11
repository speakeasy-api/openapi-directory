import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutTargetsXAmzTargetEnum {
    AWSEventsPutTargets = "AWSEvents.PutTargets"
}
export declare class PutTargetsRequest extends SpeakeasyBase {
    putTargetsRequest: shared.PutTargetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutTargetsXAmzTargetEnum;
}
export declare class PutTargetsResponse extends SpeakeasyBase {
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
    putTargetsResponse?: shared.PutTargetsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
