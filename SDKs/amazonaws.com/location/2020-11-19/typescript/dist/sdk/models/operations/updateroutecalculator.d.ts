import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.
 */
export declare enum UpdateRouteCalculatorRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdateRouteCalculatorRequestBody extends SpeakeasyBase {
    /**
     * Updates the description for the route calculator resource.
     */
    description?: string;
    /**
     * No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.
     */
    pricingPlan?: UpdateRouteCalculatorRequestBodyPricingPlanEnum;
}
export declare class UpdateRouteCalculatorRequest extends SpeakeasyBase {
    /**
     * The name of the route calculator resource to update.
     */
    calculatorName: string;
    requestBody: UpdateRouteCalculatorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRouteCalculatorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    updateRouteCalculatorResponse?: shared.UpdateRouteCalculatorResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
