import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The unique name/type of a rule.
 */
export declare enum UpdateArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class UpdateArtifactRuleConfigRequest extends SpeakeasyBase {
    rule1: shared.Rule;
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
    /**
     * The unique name/type of a rule.
     */
    rulePathParameter: UpdateArtifactRuleConfigRuleEnum;
}
export declare class UpdateArtifactRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    /**
     * Rule configuration was updated.
     */
    rule?: shared.Rule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
