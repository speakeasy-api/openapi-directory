import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The pricing mode.
 */
export declare enum UpdatePricingPlanRequestBodyPricingModeEnum {
    Basic = "BASIC",
    Standard = "STANDARD",
    TieredBundle = "TIERED_BUNDLE"
}
export declare class UpdatePricingPlanRequestBody extends SpeakeasyBase {
    /**
     * The bundle names.
     */
    bundleNames?: string[];
    /**
     * The pricing mode.
     */
    pricingMode: UpdatePricingPlanRequestBodyPricingModeEnum;
}
export declare class UpdatePricingPlanRequest extends SpeakeasyBase {
    requestBody: UpdatePricingPlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePricingPlanResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updatePricingPlanResponse?: shared.UpdatePricingPlanResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
