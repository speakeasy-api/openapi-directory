import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
 */
export declare class UpdateBillingGroupRequestBodyComputationPreference extends SpeakeasyBase {
    pricingPlanArn?: string;
}
/**
 * The status of the billing group. Only one of the valid values can be used.
 */
export declare enum UpdateBillingGroupRequestBodyStatusEnum {
    Active = "ACTIVE",
    PrimaryAccountMissing = "PRIMARY_ACCOUNT_MISSING"
}
export declare class UpdateBillingGroupRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the billing group being updated.
     */
    arn: string;
    /**
     *  The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
     */
    computationPreference?: UpdateBillingGroupRequestBodyComputationPreference;
    /**
     * A description of the billing group.
     */
    description?: string;
    /**
     * The name of the billing group. The names must be unique to each billing group.
     */
    name?: string;
    /**
     * The status of the billing group. Only one of the valid values can be used.
     */
    status?: UpdateBillingGroupRequestBodyStatusEnum;
}
export declare class UpdateBillingGroupRequest extends SpeakeasyBase {
    requestBody: UpdateBillingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateBillingGroupResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateBillingGroupOutput?: shared.UpdateBillingGroupOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
