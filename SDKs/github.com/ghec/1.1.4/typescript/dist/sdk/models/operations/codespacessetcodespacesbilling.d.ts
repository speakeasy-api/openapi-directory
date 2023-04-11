import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Which users can access codespaces in the organization. `disabled` means that no users can access codespaces in the organization.
 */
export declare enum CodespacesSetCodespacesBillingRequestBodyVisibilityEnum {
    Disabled = "disabled",
    SelectedMembers = "selected_members",
    AllMembers = "all_members",
    AllMembersAndOutsideCollaborators = "all_members_and_outside_collaborators"
}
export declare class CodespacesSetCodespacesBillingRequestBody extends SpeakeasyBase {
    /**
     * The usernames of the organization members who should have access to codespaces in the organization. Required when `visibility` is `selected_members`. The provided list of usernames will replace any existing value.
     */
    selectedUsernames?: string[];
    /**
     * Which users can access codespaces in the organization. `disabled` means that no users can access codespaces in the organization.
     */
    visibility: CodespacesSetCodespacesBillingRequestBodyVisibilityEnum;
}
export declare class CodespacesSetCodespacesBillingRequest extends SpeakeasyBase {
    requestBody: CodespacesSetCodespacesBillingRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class CodespacesSetCodespacesBillingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
