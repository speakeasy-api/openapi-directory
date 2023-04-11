import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The analysis rule type to be deleted. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
 */
export declare enum DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnum {
    Aggregation = "AGGREGATION",
    List = "LIST"
}
export declare class DeleteConfiguredTableAnalysisRuleRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The analysis rule type to be deleted. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
     */
    analysisRuleType: DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;
    /**
     * The unique identifier for the configured table that the analysis rule applies to. Currently accepts the configured table ID.
     */
    configuredTableIdentifier: string;
}
export declare class DeleteConfiguredTableAnalysisRuleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteConfiguredTableAnalysisRuleOutput?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
