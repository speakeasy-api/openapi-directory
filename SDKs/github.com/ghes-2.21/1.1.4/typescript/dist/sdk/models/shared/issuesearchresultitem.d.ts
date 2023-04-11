import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableIntegration } from "./nullableintegration";
import { NullableMilestone } from "./nullablemilestone";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Repository } from "./repository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
import { SimpleUser } from "./simpleuser";
export declare class IssueSearchResultItemLabels extends SpeakeasyBase {
    color?: string;
    default?: boolean;
    description?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class IssueSearchResultItemPullRequest extends SpeakeasyBase {
    diffUrl: string;
    htmlUrl: string;
    mergedAt?: Date;
    patchUrl: string;
    url: string;
}
/**
 * Issue Search Result Item
 */
export declare class IssueSearchResultItem extends SpeakeasyBase {
    activeLockReason?: string;
    /**
     * Simple User
     */
    assignee: NullableSimpleUser;
    assignees?: SimpleUser[];
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    closedAt: Date;
    comments: number;
    commentsUrl: string;
    createdAt: Date;
    draft?: boolean;
    eventsUrl: string;
    htmlUrl: string;
    id: number;
    labels: IssueSearchResultItemLabels[];
    labelsUrl: string;
    locked: boolean;
    /**
     * A collection of related issues and pull requests.
     */
    milestone: NullableMilestone;
    nodeId: string;
    number: number;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    pullRequest?: IssueSearchResultItemPullRequest;
    /**
     * A git repository
     */
    repository?: Repository;
    repositoryUrl: string;
    score: number;
    state: string;
    textMatches?: SearchResultTextMatches[];
    timelineUrl?: string;
    title: string;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
