import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The billing period range in which the custom line item request will be applied.
 */
export declare class UpdateCustomLineItemRequestBodyBillingPeriodRange extends SpeakeasyBase {
    exclusiveEndBillingPeriod?: string;
    inclusiveStartBillingPeriod?: string;
}
/**
 *  A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>.
 */
export declare class UpdateCustomLineItemRequestBodyChargeDetails extends SpeakeasyBase {
    flat?: shared.UpdateCustomLineItemFlatChargeDetails;
    percentage?: shared.UpdateCustomLineItemPercentageChargeDetails;
}
export declare class UpdateCustomLineItemRequestBody extends SpeakeasyBase {
    /**
     *  The ARN of the custom line item to be updated.
     */
    arn: string;
    /**
     *  The billing period range in which the custom line item request will be applied.
     */
    billingPeriodRange?: UpdateCustomLineItemRequestBodyBillingPeriodRange;
    /**
     *  A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>.
     */
    chargeDetails?: UpdateCustomLineItemRequestBodyChargeDetails;
    /**
     *  The new line item description of the custom line item.
     */
    description?: string;
    /**
     *  The new name for the custom line item.
     */
    name?: string;
}
export declare class UpdateCustomLineItemRequest extends SpeakeasyBase {
    requestBody: UpdateCustomLineItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCustomLineItemResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateCustomLineItemOutput?: shared.UpdateCustomLineItemOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
