import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateArtifactRuleRequest extends SpeakeasyBase {
    rule: shared.Rule;
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
}
export declare class CreateArtifactRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `400` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
