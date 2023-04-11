import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSavingsPlansUtilizationDetailsXAmzTargetEnum {
    AWSInsightsIndexServiceGetSavingsPlansUtilizationDetails = "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails"
}
export declare class GetSavingsPlansUtilizationDetailsRequest extends SpeakeasyBase {
    getSavingsPlansUtilizationDetailsRequest: shared.GetSavingsPlansUtilizationDetailsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSavingsPlansUtilizationDetailsXAmzTargetEnum;
}
export declare class GetSavingsPlansUtilizationDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getSavingsPlansUtilizationDetailsResponse?: shared.GetSavingsPlansUtilizationDetailsResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
