import { SpeakeasyBase } from "../../../internal/utils";
import { MediaUsage } from "./mediausage";
import { Tag } from "./tag";
/**
 * Assignment object to be created
 */
export declare class AssignmentSubmission extends SpeakeasyBase {
    allowsAnonymousContributions?: boolean;
    cover?: MediaUsage;
    description?: string;
    embargo?: Date;
    ends?: Date;
    featured?: boolean;
    id?: string;
    mediaRequired?: boolean;
    /**
     * Optional credential id of the login which will moderator this assignment.
     */
    moderator?: string;
    name: string;
    /**
     * An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames.
     */
    receiptMessage?: string;
    starts?: Date;
    tags?: Tag[];
    urlWords?: string;
}
