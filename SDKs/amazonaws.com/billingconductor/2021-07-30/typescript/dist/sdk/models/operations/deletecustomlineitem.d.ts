import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The billing period range in which the custom line item request will be applied.
 */
export declare class DeleteCustomLineItemRequestBodyBillingPeriodRange extends SpeakeasyBase {
    exclusiveEndBillingPeriod?: string;
    inclusiveStartBillingPeriod?: string;
}
export declare class DeleteCustomLineItemRequestBody extends SpeakeasyBase {
    /**
     *  The ARN of the custom line item to be deleted.
     */
    arn: string;
    /**
     *  The billing period range in which the custom line item request will be applied.
     */
    billingPeriodRange?: DeleteCustomLineItemRequestBodyBillingPeriodRange;
}
export declare class DeleteCustomLineItemRequest extends SpeakeasyBase {
    requestBody: DeleteCustomLineItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCustomLineItemResponse extends SpeakeasyBase {
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
    deleteCustomLineItemOutput?: shared.DeleteCustomLineItemOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
