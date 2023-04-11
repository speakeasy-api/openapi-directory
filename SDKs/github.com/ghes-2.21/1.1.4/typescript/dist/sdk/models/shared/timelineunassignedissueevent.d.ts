import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { SimpleUser } from "./simpleuser";
/**
 * Timeline Unassigned Issue Event
 */
export declare class TimelineUnassignedIssueEvent extends SpeakeasyBase {
    /**
     * Simple User
     */
    actor: SimpleUser;
    /**
     * Simple User
     */
    assignee: SimpleUser;
    commitId: string;
    commitUrl: string;
    createdAt: string;
    event: string;
    id: number;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp: NullableIntegration;
    url: string;
}
