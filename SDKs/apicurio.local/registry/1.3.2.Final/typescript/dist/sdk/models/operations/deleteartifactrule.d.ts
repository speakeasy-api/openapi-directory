import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The unique name/type of a rule.
 */
export declare enum DeleteArtifactRuleRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class DeleteArtifactRuleRequest extends SpeakeasyBase {
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The unique name/type of a rule.
     */
    rule: DeleteArtifactRuleRuleEnum;
}
export declare class DeleteArtifactRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
