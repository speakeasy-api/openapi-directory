import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLongTermPricingXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCreateLongTermPricing = "AWSIESnowballJobManagementService.CreateLongTermPricing"
}
export declare class CreateLongTermPricingRequest extends SpeakeasyBase {
    createLongTermPricingRequest: shared.CreateLongTermPricingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLongTermPricingXAmzTargetEnum;
}
export declare class CreateLongTermPricingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLongTermPricingResult?: shared.CreateLongTermPricingResult;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
