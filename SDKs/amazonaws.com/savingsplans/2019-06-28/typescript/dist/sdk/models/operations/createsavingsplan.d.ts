import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSavingsPlanRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: string;
    /**
     * The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.
     */
    commitment: string;
    /**
     * The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).
     */
    purchaseTime?: Date;
    /**
     * The ID of the offering.
     */
    savingsPlanOfferingId: string;
    /**
     * One or more tags.
     */
    tags?: Record<string, string>;
    /**
     * The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>.
     */
    upfrontPaymentAmount?: string;
}
export declare class CreateSavingsPlanRequest extends SpeakeasyBase {
    requestBody: CreateSavingsPlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSavingsPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSavingsPlanResponse?: shared.CreateSavingsPlanResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
