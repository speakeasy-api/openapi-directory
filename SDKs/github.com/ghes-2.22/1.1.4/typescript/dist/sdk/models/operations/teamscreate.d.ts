import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
 *
 * @remarks
 * \* `pull` - team members can pull, but not push to or administer newly-added repositories.
 * \* `push` - team members can pull and push, but not administer newly-added repositories.
 * \* `admin` - team members can pull, push and administer newly-added repositories.
 */
export declare enum TeamsCreateRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
/**
 * The level of privacy this team should have. The options are:
 *
 * @remarks
 * **For a non-nested team:**
 * \* `secret` - only visible to organization owners and members of this team.
 * \* `closed` - visible to all members of this organization.
 * Default: `secret`
 * **For a parent or child team:**
 * \* `closed` - visible to all members of this organization.
 * Default for child team: `closed`
 */
export declare enum TeamsCreateRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsCreateRequestBody extends SpeakeasyBase {
    /**
     * The description of the team.
     */
    description?: string;
    /**
     * List GitHub IDs for organization members who will become team maintainers.
     */
    maintainers?: string[];
    /**
     * The name of the team.
     */
    name: string;
    /**
     * The ID of a team to set as the parent team.
     */
    parentTeamId?: number;
    /**
     * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
     *
     * @remarks
     * \* `pull` - team members can pull, but not push to or administer newly-added repositories.
     * \* `push` - team members can pull and push, but not administer newly-added repositories.
     * \* `admin` - team members can pull, push and administer newly-added repositories.
     */
    permission?: TeamsCreateRequestBodyPermissionEnum;
    /**
     * The level of privacy this team should have. The options are:
     *
     * @remarks
     * **For a non-nested team:**
     * \* `secret` - only visible to organization owners and members of this team.
     * \* `closed` - visible to all members of this organization.
     * Default: `secret`
     * **For a parent or child team:**
     * \* `closed` - visible to all members of this organization.
     * Default for child team: `closed`
     */
    privacy?: TeamsCreateRequestBodyPrivacyEnum;
    /**
     * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
     */
    repoNames?: string[];
}
export declare class TeamsCreateRequest extends SpeakeasyBase {
    requestBody: TeamsCreateRequestBody;
    org: string;
}
export declare class TeamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    teamFull?: shared.TeamFull;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
