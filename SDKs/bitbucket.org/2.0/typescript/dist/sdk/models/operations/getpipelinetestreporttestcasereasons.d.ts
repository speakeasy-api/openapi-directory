import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineTestReportTestCaseReasonsRequest extends SpeakeasyBase {
    /**
     * The UUID of the pipeline.
     */
    pipelineUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The UUID of the step.
     */
    stepUuid: string;
    /**
     * The UUID of the test case.
     */
    testCaseUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetPipelineTestReportTestCaseReasonsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No account, repository, pipeline, step or test case with the UUID provided exists for the pipeline with the UUID provided.
     */
    error?: Record<string, any>;
}
