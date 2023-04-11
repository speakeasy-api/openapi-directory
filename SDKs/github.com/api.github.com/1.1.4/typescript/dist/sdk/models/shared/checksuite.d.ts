import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { NullableIntegration } from "./nullableintegration";
import { PullRequestMinimal } from "./pullrequestminimal";
import { SimpleCommit } from "./simplecommit";
export declare enum CheckSuiteConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required",
    StartupFailure = "startup_failure",
    Stale = "stale",
    Null = "null"
}
export declare enum CheckSuiteStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
/**
 * A suite of checks performed on the code of a given code change
 */
export declare class CheckSuite extends SpeakeasyBase {
    after: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    app: NullableIntegration;
    before: string;
    checkRunsUrl: string;
    conclusion: CheckSuiteConclusionEnum;
    createdAt: Date;
    headBranch: string;
    /**
     * A commit.
     */
    headCommit: SimpleCommit;
    /**
     * The SHA of the head commit that is being checked.
     */
    headSha: string;
    id: number;
    latestCheckRunsCount: number;
    nodeId: string;
    pullRequests: PullRequestMinimal[];
    /**
     * Minimal Repository
     */
    repository: MinimalRepository;
    rerequestable?: boolean;
    runsRerequestable?: boolean;
    status: CheckSuiteStatusEnum;
    updatedAt: Date;
    url: string;
}
