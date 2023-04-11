import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The analysis rule to be retrieved. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
 */
export declare enum GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum {
    Aggregation = "AGGREGATION",
    List = "LIST"
}
export declare class GetConfiguredTableAnalysisRuleRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The analysis rule to be retrieved. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
     */
    analysisRuleType: GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;
    /**
     * The unique identifier for the configured table to retrieve. Currently accepts the configured table ID.
     */
    configuredTableIdentifier: string;
}
export declare class GetConfiguredTableAnalysisRuleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getConfiguredTableAnalysisRuleOutput?: shared.GetConfiguredTableAnalysisRuleOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
