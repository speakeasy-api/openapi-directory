import { SpeakeasyBase } from "../../../internal/utils";
import { ContentCommentSummary } from "./contentcommentsummary";
import { ContentContentRepresentation } from "./contentcontentrepresentation";
import { UserGeneralUser } from "./usergeneraluser";
export declare class ContentContentItemPublicContract extends SpeakeasyBase {
    allowComments?: boolean;
    author?: UserGeneralUser;
    autoEnglishPropertyFallback?: boolean;
    cType?: string;
    cmsPath?: string;
    commentSummary?: ContentCommentSummary;
    contentId?: number;
    creationDate?: Date;
    hasAgeGate?: boolean;
    minimumAge?: number;
    modifyDate?: Date;
    /**
     * Firehose content is really a collection of metadata and "properties", which are the potentially-but-not-strictly localizable data that comprises the meat of whatever content is being shown.
     *
     * @remarks
     * As Cole Porter would have crooned, "Anything Goes" with Firehose properties. They are most often strings, but they can theoretically be anything. They are JSON encoded, and could be JSON structures, simple strings, numbers etc... The Content Type of the item (cType) will describe the properties, and thus how they ought to be deserialized.
     */
    properties?: Record<string, Record<string, any>>;
    ratingImagePath?: string;
    representations?: ContentContentRepresentation[];
    /**
     * NOTE: Tags will always be lower case.
     */
    tags?: string[];
}
