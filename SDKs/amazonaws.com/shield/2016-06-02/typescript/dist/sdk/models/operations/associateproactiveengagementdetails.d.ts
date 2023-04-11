import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateProactiveEngagementDetailsXAmzTargetEnum {
    AWSShield20160616AssociateProactiveEngagementDetails = "AWSShield_20160616.AssociateProactiveEngagementDetails"
}
export declare class AssociateProactiveEngagementDetailsRequest extends SpeakeasyBase {
    associateProactiveEngagementDetailsRequest: shared.AssociateProactiveEngagementDetailsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateProactiveEngagementDetailsXAmzTargetEnum;
}
export declare class AssociateProactiveEngagementDetailsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateProactiveEngagementDetailsResponse?: Record<string, any>;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
