import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { Label } from "./label";
import { NullableIntegration } from "./nullableintegration";
import { NullableMilestone } from "./nullablemilestone";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Repository } from "./repository";
import { SimpleUser } from "./simpleuser";
export declare class IssueSimplePullRequest extends SpeakeasyBase {
    diffUrl: string;
    htmlUrl: string;
    mergedAt?: Date;
    patchUrl: string;
    url: string;
}
/**
 * Issue Simple
 */
export declare class IssueSimple extends SpeakeasyBase {
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
    eventsUrl: string;
    htmlUrl: string;
    id: number;
    labels: Label[];
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
    pullRequest?: IssueSimplePullRequest;
    /**
     * A git repository
     */
    repository?: Repository;
    repositoryUrl: string;
    state: string;
    timelineUrl?: string;
    title: string;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
