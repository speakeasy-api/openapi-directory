import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateUsingTemplateRequestBody extends SpeakeasyBase {
    /**
     * A short description of the new repository.
     */
    description?: string;
    /**
     * Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.
     */
    includeAllBranches?: boolean;
    /**
     * The name of the new repository.
     */
    name: string;
    /**
     * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
     */
    owner?: string;
    /**
     * Either `true` to create a new private repository or `false` to create a new public one.
     */
    private?: boolean;
}
export declare class ReposCreateUsingTemplateRequest extends SpeakeasyBase {
    requestBody: ReposCreateUsingTemplateRequestBody;
    templateOwner: string;
    templateRepo: string;
}
export declare class ReposCreateUsingTemplateResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repository?: shared.Repository;
}
