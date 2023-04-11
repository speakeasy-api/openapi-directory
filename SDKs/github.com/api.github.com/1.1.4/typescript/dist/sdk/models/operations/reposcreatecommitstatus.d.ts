import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the status.
 */
export declare enum ReposCreateCommitStatusRequestBodyStateEnum {
    Error = "error",
    Failure = "failure",
    Pending = "pending",
    Success = "success"
}
export declare class ReposCreateCommitStatusRequestBody extends SpeakeasyBase {
    /**
     * A string label to differentiate this status from the status of other systems. This field is case-insensitive.
     */
    context?: string;
    /**
     * A short description of the status.
     */
    description?: string;
    /**
     * The state of the status.
     */
    state: ReposCreateCommitStatusRequestBodyStateEnum;
    /**
     * The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
     *
     * @remarks
     * For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:
     * `http://ci.example.com/user/repo/build/sha`
     */
    targetUrl?: string;
}
export declare class ReposCreateCommitStatusRequest extends SpeakeasyBase {
    requestBody: ReposCreateCommitStatusRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    sha: string;
}
export declare class ReposCreateCommitStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    status?: shared.Status;
}
