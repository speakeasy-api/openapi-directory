import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListConformancePackComplianceScoresXAmzTargetEnum {
    StarlingDoveServiceListConformancePackComplianceScores = "StarlingDoveService.ListConformancePackComplianceScores"
}
export declare class ListConformancePackComplianceScoresRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listConformancePackComplianceScoresRequest: shared.ListConformancePackComplianceScoresRequest;
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
    xAmzTarget: ListConformancePackComplianceScoresXAmzTargetEnum;
}
export declare class ListConformancePackComplianceScoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listConformancePackComplianceScoresResponse?: shared.ListConformancePackComplianceScoresResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
