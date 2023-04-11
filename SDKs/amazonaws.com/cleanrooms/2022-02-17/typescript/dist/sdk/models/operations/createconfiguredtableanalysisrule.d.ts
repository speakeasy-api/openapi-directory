import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Controls on the query specifications that can be run on a configured table.
 */
export declare class CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy extends SpeakeasyBase {
    v1?: shared.ConfiguredTableAnalysisRulePolicyV1;
}
/**
 * The type of analysis rule. Valid values are AGGREGATION and LIST.
 */
export declare enum CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnum {
    Aggregation = "AGGREGATION",
    List = "LIST"
}
export declare class CreateConfiguredTableAnalysisRuleRequestBody extends SpeakeasyBase {
    /**
     * Controls on the query specifications that can be run on a configured table.
     */
    analysisRulePolicy: CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy;
    /**
     * The type of analysis rule. Valid values are AGGREGATION and LIST.
     */
    analysisRuleType: CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnum;
}
export declare class CreateConfiguredTableAnalysisRuleRequest extends SpeakeasyBase {
    requestBody: CreateConfiguredTableAnalysisRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier for the configured table to create the analysis rule for. Currently accepts the configured table ID.
     */
    configuredTableIdentifier: string;
}
export declare class CreateConfiguredTableAnalysisRuleResponse extends SpeakeasyBase {
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
    createConfiguredTableAnalysisRuleOutput?: shared.CreateConfiguredTableAnalysisRuleOutput;
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
