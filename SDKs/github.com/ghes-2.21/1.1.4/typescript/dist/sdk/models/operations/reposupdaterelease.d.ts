import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateReleaseRequestBody extends SpeakeasyBase {
    /**
     * Text describing the contents of the tag.
     */
    body?: string;
    /**
     * `true` makes the release a draft, and `false` publishes the release.
     */
    draft?: boolean;
    /**
     * The name of the release.
     */
    name?: string;
    /**
     * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
     */
    prerelease?: boolean;
    /**
     * The name of the tag.
     */
    tagName?: string;
    /**
     * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
     */
    targetCommitish?: string;
}
export declare class ReposUpdateReleaseRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateReleaseRequestBody;
    owner: string;
    /**
     * release_id parameter
     */
    releaseId: number;
    repo: string;
}
export declare class ReposUpdateReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    release?: shared.Release;
}
