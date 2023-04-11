import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The billing period range in which the custom line item request will be applied.
 */
export declare class CreateCustomLineItemRequestBodyBillingPeriodRange extends SpeakeasyBase {
    exclusiveEndBillingPeriod?: string;
    inclusiveStartBillingPeriod?: string;
}
/**
 *  The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>.
 */
export declare class CreateCustomLineItemRequestBodyChargeDetails extends SpeakeasyBase {
    flat?: shared.CustomLineItemFlatChargeDetails;
    percentage?: shared.CustomLineItemPercentageChargeDetails;
    type?: shared.CustomLineItemTypeEnum;
}
export declare class CreateCustomLineItemRequestBody extends SpeakeasyBase {
    /**
     *  The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
     */
    billingGroupArn: string;
    /**
     *  The billing period range in which the custom line item request will be applied.
     */
    billingPeriodRange?: CreateCustomLineItemRequestBodyBillingPeriodRange;
    /**
     *  The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>.
     */
    chargeDetails: CreateCustomLineItemRequestBodyChargeDetails;
    /**
     *  The description of the custom line item. This is shown on the Bills page in association with the charge value.
     */
    description: string;
    /**
     *  The name of the custom line item.
     */
    name: string;
    /**
     *  A map that contains tag keys and tag values that are attached to a custom line item.
     */
    tags?: Record<string, string>;
}
export declare class CreateCustomLineItemRequest extends SpeakeasyBase {
    requestBody: CreateCustomLineItemRequestBody;
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
export declare class CreateCustomLineItemResponse extends SpeakeasyBase {
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
    createCustomLineItemOutput?: shared.CreateCustomLineItemOutput;
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
