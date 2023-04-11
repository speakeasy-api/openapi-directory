import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEvaluationResultsXAmzTargetEnum {
    StarlingDoveServiceDeleteEvaluationResults = "StarlingDoveService.DeleteEvaluationResults"
}
export declare class DeleteEvaluationResultsRequest extends SpeakeasyBase {
    deleteEvaluationResultsRequest: shared.DeleteEvaluationResultsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEvaluationResultsXAmzTargetEnum;
}
export declare class DeleteEvaluationResultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEvaluationResultsResponse?: Record<string, any>;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
}
