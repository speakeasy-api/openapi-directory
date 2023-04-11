import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Actions OIDC subject customization for a repository
 */
export declare class ActionsSetCustomOIDCSubClaimForRepoActionsOIDCSubjectCustomizationForARepository extends SpeakeasyBase {
    /**
     * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
     */
    includeClaimKeys?: string[];
    /**
     * Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.
     */
    useDefault: boolean;
}
export declare class ActionsSetCustomOidcSubClaimForRepoRequest extends SpeakeasyBase {
    requestBody: ActionsSetCustomOIDCSubClaimForRepoActionsOIDCSubjectCustomizationForARepository;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ActionsSetCustomOidcSubClaimForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Empty response
     */
    emptyObject?: Record<string, any>;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
