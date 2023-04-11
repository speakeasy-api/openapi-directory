import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableIntegration } from "./nullableintegration";
import { ReactionRollup } from "./reactionrollup";
import { SimpleUser } from "./simpleuser";
/**
 * Timeline Comment Event
 */
export declare class TimelineCommentEvent extends SpeakeasyBase {
    /**
     * Simple User
     */
    actor: SimpleUser;
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
    event: string;
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
    user: SimpleUser;
}
