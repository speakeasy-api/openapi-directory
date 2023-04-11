import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest extends SpeakeasyBase {
    /**
     * The project in question. This is the actual `key` assigned
     *
     * @remarks
     * to the project.
     *
     */
    projectKey: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The updated branching model configuration
     */
    branchingModelSettings?: Record<string, any>;
    /**
     * If the request contains an invalid branching model configuration
     */
    error?: Record<string, any>;
}
