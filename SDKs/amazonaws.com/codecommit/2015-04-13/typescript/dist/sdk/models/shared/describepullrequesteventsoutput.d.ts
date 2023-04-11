import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestEvent } from "./pullrequestevent";
/**
 * Success
 */
export declare class DescribePullRequestEventsOutput extends SpeakeasyBase {
    nextToken?: string;
    pullRequestEvents: PullRequestEvent[];
}
