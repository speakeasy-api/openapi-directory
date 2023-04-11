import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetAdvisorLsaAnalysisXAmzTargetEnum {
    AmazonDMSv20160101DescribeFleetAdvisorLsaAnalysis = "AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis"
}
export declare class DescribeFleetAdvisorLsaAnalysisRequest extends SpeakeasyBase {
    describeFleetAdvisorLsaAnalysisRequest: shared.DescribeFleetAdvisorLsaAnalysisRequest;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
    xAmzTarget: DescribeFleetAdvisorLsaAnalysisXAmzTargetEnum;
}
export declare class DescribeFleetAdvisorLsaAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetAdvisorLsaAnalysisResponse?: shared.DescribeFleetAdvisorLsaAnalysisResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
