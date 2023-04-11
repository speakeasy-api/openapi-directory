import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Controls on the query specifications that can be run on a configured table.
 */
export declare class UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy extends SpeakeasyBase {
    v1?: shared.ConfiguredTableAnalysisRulePolicyV1;
}
export declare class UpdateConfiguredTableAnalysisRuleRequestBody extends SpeakeasyBase {
    /**
     * Controls on the query specifications that can be run on a configured table.
     */
    analysisRulePolicy: UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy;
}
/**
 * The analysis rule type to be updated. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
 */
export declare enum UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnum {
    Aggregation = "AGGREGATION",
    List = "LIST"
}
export declare class UpdateConfiguredTableAnalysisRuleRequest extends SpeakeasyBase {
    requestBody: UpdateConfiguredTableAnalysisRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The analysis rule type to be updated. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
     */
    analysisRuleType: UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;
    /**
     * The unique identifier for the configured table that the analysis rule applies to. Currently accepts the configured table ID.
     */
    configuredTableIdentifier: string;
}
export declare class UpdateConfiguredTableAnalysisRuleResponse extends SpeakeasyBase {
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
     * Success
     */
    updateConfiguredTableAnalysisRuleOutput?: shared.UpdateConfiguredTableAnalysisRuleOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
