import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesSetSelectedReposForOrgSecretRequestBody extends SpeakeasyBase {
    /**
     * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#remove-selected-repository-from-an-organization-secret) endpoints.
     */
    selectedRepositoryIds: number[];
}
export declare class CodespacesSetSelectedReposForOrgSecretRequest extends SpeakeasyBase {
    requestBody: CodespacesSetSelectedReposForOrgSecretRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesSetSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
