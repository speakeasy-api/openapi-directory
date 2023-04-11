import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSavingsPlansCoverageXAmzTargetEnum {
    AWSInsightsIndexServiceGetSavingsPlansCoverage = "AWSInsightsIndexService.GetSavingsPlansCoverage"
}
export declare class GetSavingsPlansCoverageRequest extends SpeakeasyBase {
    getSavingsPlansCoverageRequest: shared.GetSavingsPlansCoverageRequest;
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
    xAmzTarget: GetSavingsPlansCoverageXAmzTargetEnum;
}
export declare class GetSavingsPlansCoverageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getSavingsPlansCoverageResponse?: shared.GetSavingsPlansCoverageResponse;
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
