import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The payment option.
 */
export declare enum CreateOrderRequestBodyPaymentOptionEnum {
    AllUpfront = "ALL_UPFRONT",
    NoUpfront = "NO_UPFRONT",
    PartialUpfront = "PARTIAL_UPFRONT"
}
/**
 * The payment terms.
 */
export declare enum CreateOrderRequestBodyPaymentTermEnum {
    ThreeYears = "THREE_YEARS",
    OneYear = "ONE_YEAR"
}
export declare class CreateOrderRequestBody extends SpeakeasyBase {
    /**
     * The line items that make up the order.
     */
    lineItems: shared.LineItemRequest[];
    /**
     *  The ID or the Amazon Resource Name (ARN) of the Outpost.
     */
    outpostIdentifier: string;
    /**
     * The payment option.
     */
    paymentOption: CreateOrderRequestBodyPaymentOptionEnum;
    /**
     * The payment terms.
     */
    paymentTerm?: CreateOrderRequestBodyPaymentTermEnum;
}
export declare class CreateOrderRequest extends SpeakeasyBase {
    requestBody: CreateOrderRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateOrderResponse extends SpeakeasyBase {
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
    createOrderOutput?: shared.CreateOrderOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
