import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { NullableSimpleCommit } from "./nullablesimplecommit";
import { PullRequestMinimal } from "./pullrequestminimal";
/**
 * An invocation of a workflow
 */
export declare class WorkflowRun extends SpeakeasyBase {
    /**
     * The URL to the artifacts for the workflow run.
     */
    artifactsUrl: string;
    /**
     * The URL to cancel the workflow run.
     */
    cancelUrl: string;
    /**
     * The ID of the associated check suite.
     */
    checkSuiteId?: number;
    /**
     * The node ID of the associated check suite.
     */
    checkSuiteNodeId?: string;
    /**
     * The URL to the associated check suite.
     */
    checkSuiteUrl: string;
    conclusion: string;
    createdAt: Date;
    event: string;
    headBranch: string;
    /**
     * Simple Commit
     */
    headCommit: NullableSimpleCommit;
    /**
     * Minimal Repository
     */
    headRepository: MinimalRepository;
    headRepositoryId?: number;
    /**
     * The SHA of the head commit that points to the version of the worflow being run.
     */
    headSha: string;
    htmlUrl: string;
    /**
     * The ID of the workflow run.
     */
    id: number;
    /**
     * The URL to the jobs for the workflow run.
     */
    jobsUrl: string;
    /**
     * The URL to download the logs for the workflow run.
     */
    logsUrl: string;
    /**
     * The name of the workflow run.
     */
    name?: string;
    nodeId: string;
    /**
     * The URL to the previous attempted run of this workflow, if one exists.
     */
    previousAttemptUrl?: string;
    pullRequests: PullRequestMinimal[];
    /**
     * Minimal Repository
     */
    repository: MinimalRepository;
    /**
     * The URL to rerun the workflow run.
     */
    rerunUrl: string;
    /**
     * Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.
     */
    runAttempt?: number;
    /**
     * The auto incrementing run number for the workflow run.
     */
    runNumber: number;
    /**
     * The start time of the latest run. Resets on re-run.
     */
    runStartedAt?: Date;
    status: string;
    updatedAt: Date;
    /**
     * The URL to the workflow run.
     */
    url: string;
    /**
     * The ID of the parent workflow.
     */
    workflowId: number;
    /**
     * The URL to the workflow.
     */
    workflowUrl: string;
}
