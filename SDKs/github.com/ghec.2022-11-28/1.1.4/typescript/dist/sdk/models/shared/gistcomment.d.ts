import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * A comment made to a gist.
 */
export declare class GistComment extends SpeakeasyBase {
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    /**
     * The comment text.
     */
    body: string;
    createdAt: Date;
    id: number;
    nodeId: string;
    updatedAt: Date;
    url: string;
    /**
     * A GitHub user.
     */
    user: NullableSimpleUser;
}
