import { SpeakeasyBase } from "../../../internal/utils";
import { MediaUsage } from "./mediausage";
import { Tag } from "./tag";
/**
 * Assignment created
 */
export declare class Assignment extends SpeakeasyBase {
    allowsAnonymousContributions?: boolean;
    /**
     * An optional call to action specific to this assignment. ie. Submit your snow pictures.
     */
    callToAction?: string;
    cover?: MediaUsage;
    created?: Date;
    description?: string;
    embargo?: Date;
    ends?: Date;
    featured?: boolean;
    id?: string;
    mediaRequired?: boolean;
    /**
     * Optional credential id of the moderator who owns this particular assignment.
     */
    moderator?: string;
    name?: string;
    /**
     * Helper value. Is this assignment currently open? Based on the value of the ends field.
     */
    open?: boolean;
    /**
     * An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames.
     */
    receiptMessage?: string;
    starts?: Date;
    tags?: Tag[];
    urlWords?: string;
    webUrl?: string;
}
