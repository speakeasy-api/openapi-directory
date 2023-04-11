import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsListSamlSsoAuthorizationsRequest extends SpeakeasyBase {
    /**
     * Limits the list of credentials authorizations for an organization to a specific login
     */
    login?: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page token
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class OrgsListSamlSsoAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    credentialAuthorizations?: shared.CredentialAuthorization[];
}
