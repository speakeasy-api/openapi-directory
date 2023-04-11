import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely identified by a combination of the collaboration, the schema name, and their type.
 */
export declare enum GetSchemaAnalysisRuleTypeEnum {
    Aggregation = "AGGREGATION",
    List = "LIST"
}
export declare class GetSchemaAnalysisRuleRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
     */
    collaborationIdentifier: string;
    /**
     * The name of the schema to retrieve the analysis rule for.
     */
    name: string;
    /**
     * The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely identified by a combination of the collaboration, the schema name, and their type.
     */
    type: GetSchemaAnalysisRuleTypeEnum;
}
export declare class GetSchemaAnalysisRuleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getSchemaAnalysisRuleOutput?: shared.GetSchemaAnalysisRuleOutput;
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
