import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSolutionMetricsXAmzTargetEnum {
    AmazonPersonalizeGetSolutionMetrics = "AmazonPersonalize.GetSolutionMetrics"
}
export declare class GetSolutionMetricsRequest extends SpeakeasyBase {
    getSolutionMetricsRequest: shared.GetSolutionMetricsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSolutionMetricsXAmzTargetEnum;
}
export declare class GetSolutionMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSolutionMetricsResponse?: shared.GetSolutionMetricsResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
