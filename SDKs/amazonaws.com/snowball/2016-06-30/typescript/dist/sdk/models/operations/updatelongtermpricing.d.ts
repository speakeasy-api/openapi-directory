import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLongTermPricingXAmzTargetEnum {
    AWSIESnowballJobManagementServiceUpdateLongTermPricing = "AWSIESnowballJobManagementService.UpdateLongTermPricing"
}
export declare class UpdateLongTermPricingRequest extends SpeakeasyBase {
    updateLongTermPricingRequest: shared.UpdateLongTermPricingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLongTermPricingXAmzTargetEnum;
}
export declare class UpdateLongTermPricingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateLongTermPricingResult?: Record<string, any>;
}
