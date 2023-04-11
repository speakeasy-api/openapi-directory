import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProjectUsernameProjectRequestBody extends SpeakeasyBase {
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
    /**
     * The tag to build. Default is null. Cannot be used with revision parameter.
     *
     * @remarks
     *
     */
    tag?: string;
}
export declare class PostProjectUsernameProjectRequest extends SpeakeasyBase {
    requestBody?: PostProjectUsernameProjectRequestBody;
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
export declare class PostProjectUsernameProjectResponse extends SpeakeasyBase {
    /**
     * returns a summary of the build
     */
    buildSummary?: shared.BuildSummary;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
