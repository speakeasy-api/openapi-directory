import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated family.
 */
export declare class CreateBillingGroupRequestBodyAccountGrouping extends SpeakeasyBase {
    linkedAccountIds?: string[];
}
/**
 *  The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
 */
export declare class CreateBillingGroupRequestBodyComputationPreference extends SpeakeasyBase {
    pricingPlanArn?: string;
}
export declare class CreateBillingGroupRequestBody extends SpeakeasyBase {
    /**
     *  The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated family.
     */
    accountGrouping: CreateBillingGroupRequestBodyAccountGrouping;
    /**
     *  The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
     */
    computationPreference: CreateBillingGroupRequestBodyComputationPreference;
    /**
     * The description of the billing group.
     */
    description?: string;
    /**
     *  The billing group name. The names must be unique.
     */
    name: string;
    /**
     *  The account ID that serves as the main account in a billing group.
     */
    primaryAccountId?: string;
    /**
     *  A map that contains tag keys and tag values that are attached to a billing group. This feature isn't available during the beta.
     */
    tags?: Record<string, string>;
}
export declare class CreateBillingGroupRequest extends SpeakeasyBase {
    requestBody: CreateBillingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
     */
    xAmznClientToken?: string;
}
export declare class CreateBillingGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createBillingGroupOutput?: shared.CreateBillingGroupOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceLimitExceededException
     */
    serviceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
