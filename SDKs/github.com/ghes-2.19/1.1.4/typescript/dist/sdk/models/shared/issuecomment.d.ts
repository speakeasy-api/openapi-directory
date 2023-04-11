import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableIntegration } from "./nullableintegration";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { ReactionRollup } from "./reactionrollup";
/**
 * Comments provide a way for people to collaborate on an issue.
 */
export declare class IssueComment extends SpeakeasyBase {
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    /**
     * Contents of the issue comment
     */
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    createdAt: Date;
    htmlUrl: string;
    /**
     * Unique identifier of the issue comment
     */
    id: number;
    issueUrl: string;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    reactions?: ReactionRollup;
    updatedAt: Date;
    /**
     * URL for the issue comment
     */
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
