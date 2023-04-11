import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 */
export declare enum MigrationsStartImportRequestBodyVcsEnum {
    Subversion = "subversion",
    Git = "git",
    Mercurial = "mercurial",
    Tfvc = "tfvc"
}
export declare class MigrationsStartImportRequestBody extends SpeakeasyBase {
    /**
     * For a tfvc import, the name of the project that is being imported.
     */
    tfvcProject?: string;
    /**
     * The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
     */
    vcs?: MigrationsStartImportRequestBodyVcsEnum;
    /**
     * If authentication is required, the password to provide to `vcs_url`.
     */
    vcsPassword?: string;
    /**
     * The URL of the originating repository.
     */
    vcsUrl: string;
    /**
     * If authentication is required, the username to provide to `vcs_url`.
     */
    vcsUsername?: string;
}
export declare class MigrationsStartImportRequest extends SpeakeasyBase {
    requestBody: MigrationsStartImportRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class MigrationsStartImportResponse extends SpeakeasyBase {
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
    import?: shared.Import;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
