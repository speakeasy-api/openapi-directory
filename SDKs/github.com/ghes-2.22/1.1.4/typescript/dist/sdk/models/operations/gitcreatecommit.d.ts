import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
 */
export declare class GitCreateCommitRequestBodyAuthor extends SpeakeasyBase {
    /**
     * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    date?: Date;
    /**
     * The email of the author (or committer) of the commit
     */
    email: string;
    /**
     * The name of the author (or committer) of the commit
     */
    name: string;
}
/**
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
 */
export declare class GitCreateCommitRequestBodyCommitter extends SpeakeasyBase {
    /**
     * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    date?: Date;
    /**
     * The email of the author (or committer) of the commit
     */
    email?: string;
    /**
     * The name of the author (or committer) of the commit
     */
    name?: string;
}
export declare class GitCreateCommitRequestBody extends SpeakeasyBase {
    /**
     * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
     */
    author?: GitCreateCommitRequestBodyAuthor;
    /**
     * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
     */
    committer?: GitCreateCommitRequestBodyCommitter;
    /**
     * The commit message
     */
    message: string;
    /**
     * The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
     */
    parents?: string[];
    /**
     * The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.
     */
    signature?: string;
    /**
     * The SHA of the tree object this commit points to
     */
    tree: string;
}
export declare class GitCreateCommitRequest extends SpeakeasyBase {
    requestBody: GitCreateCommitRequestBody;
    owner: string;
    repo: string;
}
export declare class GitCreateCommitResponse extends SpeakeasyBase {
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
    gitCommit?: shared.GitCommit;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
