import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSavingsPlansUtilizationXAmzTargetEnum {
    AWSInsightsIndexServiceGetSavingsPlansUtilization = "AWSInsightsIndexService.GetSavingsPlansUtilization"
}
export declare class GetSavingsPlansUtilizationRequest extends SpeakeasyBase {
    getSavingsPlansUtilizationRequest: shared.GetSavingsPlansUtilizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSavingsPlansUtilizationXAmzTargetEnum;
}
export declare class GetSavingsPlansUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getSavingsPlansUtilizationResponse?: shared.GetSavingsPlansUtilizationResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
