import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRepositoryPipelineConfigRequest extends SpeakeasyBase {
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The account.
     */
    workspace: string;
}
export declare class GetRepositoryPipelineConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The repository pipelines configuration.
     */
    pipelinesConfig?: Record<string, any>;
}
