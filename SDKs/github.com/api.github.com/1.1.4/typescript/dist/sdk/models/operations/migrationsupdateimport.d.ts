import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of version control system you are migrating from.
 */
export declare enum MigrationsUpdateImportRequestBodyVcsEnum {
    Subversion = "subversion",
    Tfvc = "tfvc",
    Git = "git",
    Mercurial = "mercurial"
}
export declare class MigrationsUpdateImportRequestBody extends SpeakeasyBase {
    /**
     * For a tfvc import, the name of the project that is being imported.
     */
    tfvcProject?: string;
    /**
     * The type of version control system you are migrating from.
     */
    vcs?: MigrationsUpdateImportRequestBodyVcsEnum;
    /**
     * The password to provide to the originating repository.
     */
    vcsPassword?: string;
    /**
     * The username to provide to the originating repository.
     */
    vcsUsername?: string;
}
export declare class MigrationsUpdateImportRequest extends SpeakeasyBase {
    requestBody?: MigrationsUpdateImportRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class MigrationsUpdateImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unavailable due to service under maintenance.
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    import?: shared.Import;
}
