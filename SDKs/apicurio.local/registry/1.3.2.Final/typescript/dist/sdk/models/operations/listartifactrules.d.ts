import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListArtifactRulesRequest extends SpeakeasyBase {
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
}
export declare class ListArtifactRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    /**
     * Returns the names of the rules configured for the artifact.
     */
    ruleTypes?: shared.RuleTypeEnum[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
