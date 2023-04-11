import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRepositoryBuildNumberRequest extends SpeakeasyBase {
    /**
     * The build number to update.
     */
    requestBody: Record<string, any>;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class UpdateRepositoryBuildNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The update failed because the next number was invalid (it should be higher than the current number).
     */
    error?: Record<string, any>;
    /**
     * The build number has been configured.
     */
    pipelineBuildNumber?: Record<string, any>;
}
