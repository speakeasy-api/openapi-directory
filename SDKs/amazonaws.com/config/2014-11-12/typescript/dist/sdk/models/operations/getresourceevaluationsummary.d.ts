import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceEvaluationSummaryXAmzTargetEnum {
    StarlingDoveServiceGetResourceEvaluationSummary = "StarlingDoveService.GetResourceEvaluationSummary"
}
export declare class GetResourceEvaluationSummaryRequest extends SpeakeasyBase {
    getResourceEvaluationSummaryRequest: shared.GetResourceEvaluationSummaryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceEvaluationSummaryXAmzTargetEnum;
}
export declare class GetResourceEvaluationSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceEvaluationSummaryResponse?: shared.GetResourceEvaluationSummaryResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
