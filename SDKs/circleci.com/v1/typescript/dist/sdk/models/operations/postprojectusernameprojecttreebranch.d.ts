import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProjectUsernameProjectTreeBranchRequestBody extends SpeakeasyBase {
    /**
     * Additional environment variables to inject into the build environment. A map of names to values.
     *
     * @remarks
     *
     */
    buildParameters?: Record<string, any>;
    /**
     * The number of containers to use to run the build. Default is null and the project default is used.
     *
     * @remarks
     *
     */
    parallel?: string;
    /**
     * The specific revision to build.
     *
     * @remarks
     * Default is null and the head of the branch is used. Cannot be used with tag parameter.
     *
     */
    revision?: string;
}
export declare class PostProjectUsernameProjectTreeBranchRequest extends SpeakeasyBase {
    requestBody?: PostProjectUsernameProjectTreeBranchRequestBody;
    /**
     * The branch name should be url-encoded.
     *
     * @remarks
     *
     */
    branch: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
export declare class PostProjectUsernameProjectTreeBranchResponse extends SpeakeasyBase {
    /**
     * returns a summary of the build
     */
    build?: shared.Build;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
