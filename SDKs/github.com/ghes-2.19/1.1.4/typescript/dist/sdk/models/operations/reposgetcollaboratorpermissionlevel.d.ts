import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetCollaboratorPermissionLevelRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposGetCollaboratorPermissionLevelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * if user has admin permissions
     */
    repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;
}
