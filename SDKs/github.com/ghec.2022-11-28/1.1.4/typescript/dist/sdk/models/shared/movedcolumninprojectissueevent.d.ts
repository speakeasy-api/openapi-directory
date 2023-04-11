import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { SimpleUser } from "./simpleuser";
export declare class MovedColumnInProjectIssueEventProjectCard extends SpeakeasyBase {
    columnName: string;
    id: number;
    previousColumnName?: string;
    projectId: number;
    projectUrl: string;
    url: string;
}
/**
 * Moved Column in Project Issue Event
 */
export declare class MovedColumnInProjectIssueEvent extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    actor: SimpleUser;
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
    projectCard?: MovedColumnInProjectIssueEventProjectCard;
    url: string;
}
