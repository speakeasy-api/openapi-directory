import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:
 *
 * @remarks
 * \* `pull` - can pull, but not push to or administer this repository.
 * \* `push` - can pull and push, but not administer this repository.
 * \* `admin` - can pull, push and administer this repository.
 * \* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
 * \* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
 * \* custom repository role name - Can assign a custom repository role if the owning organization has defined any.
 */
export declare enum ReposAddCollaboratorRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}
export declare class ReposAddCollaboratorRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:
     *
     * @remarks
     * \* `pull` - can pull, but not push to or administer this repository.
     * \* `push` - can pull and push, but not administer this repository.
     * \* `admin` - can pull, push and administer this repository.
     * \* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
     * \* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
     * \* custom repository role name - Can assign a custom repository role if the owning organization has defined any.
     */
    permission?: ReposAddCollaboratorRequestBodyPermissionEnum;
    permissions?: string;
}
export declare class ReposAddCollaboratorRequest extends SpeakeasyBase {
    requestBody?: ReposAddCollaboratorRequestBody;
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposAddCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response when a new invitation is created
     */
    repositoryInvitation?: shared.RepositoryInvitation;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
