import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * The raw string to be used as the new commit's author.
     * This string follows the format
     * `Erik van Zijst <evzijst@atlassian.com>`.
     *
     * When omitted, Bitbucket uses the authenticated user's
     * full/display name and primary email address. Commits cannot
     * be created anonymously.
     */
    author?: string;
    /**
     *
     * @remarks
     * The name of the branch that the new commit should be
     * created on. When omitted, the commit will be created on top
     * of the main branch and will become the main branch's new
     * head.
     *
     * When a branch name is provided that already exists in the
     * repo, then the commit will be created on top of that
     * branch. In this case, *if* a parent SHA1 was also provided,
     * then it is asserted that the parent is the branch's
     * tip/HEAD at the time the request is made. When this is not
     * the case, a 409 is returned.
     *
     * When a new branch name is specified (that does not already
     * exist in the repo), and no parent SHA1s are provided, then
     * the new commit will inherit from the current main branch's
     * tip/HEAD commit, but not advance the main branch. The new
     * commit will be the new branch. When the request *also*
     * specifies a parent SHA1, then the new commit and branch
     * are created directly on top of the parent commit,
     * regardless of the state of the main branch.
     *
     * When a branch name is not specified, but a parent SHA1 is
     * provided, then Bitbucket asserts that it represents the
     * main branch's current HEAD/tip, or a 409 is returned.
     *
     * When a branch name is not specified and the repo is empty,
     * the new commit will become the repo's root commit and will
     * be on the main branch.
     *
     * When a branch name is specified and the repo is empty, the
     * new commit will become the repo's root commit and also
     * define the repo's main branch going forward.
     *
     * This API cannot be used to create additional root commits
     * in non-empty repos.
     *
     * The branch field cannot be repeated.
     *
     * As a side effect, this API can be used to create a new
     * branch without modifying any files, by specifying a new
     * branch name in this field, together with `parents`, but
     * omitting the `files` fields, while not sending any files.
     * This will create a new commit and branch with the same
     * contents as the first parent. The diff of this commit
     * against its first parent will be empty.
     *
     */
    branch?: string;
    /**
     *
     * @remarks
     * Optional field that declares the files that the request is
     * manipulating. When adding a new file to a repo, or when
     * overwriting an existing file, the client can just upload
     * the full contents of the file in a normal form field and
     * the use of this `files` meta data field is redundant.
     * However, when the `files` field contains a file path that
     * does not have a corresponding, identically-named form
     * field, then Bitbucket interprets that as the client wanting
     * to replace the named file with the null set and the file is
     * deleted instead.
     *
     * Paths in the repo that are referenced in neither files nor
     * an individual file field, remain unchanged and carry over
     * from the parent to the new commit.
     *
     * This API does not support renaming as an explicit feature.
     * To rename a file, simply delete it and recreate it under
     * the new name in the same commit.
     *
     */
    files?: string;
    /**
     * The commit message. When omitted, Bitbucket uses a canned string.
     */
    message?: string;
    /**
     *
     * @remarks
     * A comma-separated list of SHA1s of the commits that should
     * be the parents of the newly created commit.
     *
     * When omitted, the new commit will inherit from and become
     * a child of the main branch's tip/HEAD commit.
     *
     * When more than one SHA1 is provided, the first SHA1
     * identifies the commit from which the content will be
     * inherited.".
     */
    parents?: string;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have write or admin access
     */
    error?: Record<string, any>;
}
