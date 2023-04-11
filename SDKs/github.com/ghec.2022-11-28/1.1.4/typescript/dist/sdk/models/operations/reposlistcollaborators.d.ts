import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see.
 */
export declare enum ReposListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}
/**
 * Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.
 */
export declare enum ReposListCollaboratorsPermissionEnum {
    Pull = "pull",
    Triage = "triage",
    Push = "push",
    Maintain = "maintain",
    Admin = "admin"
}
export declare class ReposListCollaboratorsRequest extends SpeakeasyBase {
    /**
     * Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see.
     */
    affiliation?: ReposListCollaboratorsAffiliationEnum;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.
     */
    permission?: ReposListCollaboratorsPermissionEnum;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposListCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    collaborators?: shared.Collaborator[];
}
