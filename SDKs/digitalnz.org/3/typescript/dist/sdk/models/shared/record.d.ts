import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecordCategoryEnum {
    Newspapers = "Newspapers",
    Images = "Images",
    Books = "Books",
    Articles = "Articles",
    Journals = "Journals",
    Archives = "Archives",
    Audio = "Audio",
    Other = "Other",
    Manuscripts = "Manuscripts",
    ReferenceSources = "Reference sources",
    ResearchPapers = "Research papers",
    Videos = "Videos",
    MusicScore = "Music Score",
    Groups = "Groups",
    Data = "Data",
    Websites = "Websites",
    Sets = "Sets"
}
export declare enum RecordCopyrightEnum {
    AllRightsReserved = "All rights reserved",
    SomeRightsReserved = "Some rights reserved",
    NoKnownCopyrightRestrictions = "No known copyright restrictions",
    Unknown = "Unknown"
}
export declare class RecordLocations extends SpeakeasyBase {
    /**
     * Describes who provided this location metadata.
     */
    comment?: string;
    lat?: number;
    lng?: number;
    placename?: string;
}
export declare enum RecordUsageEnum {
    AllRightsReserved = "All rights reserved",
    Share = "Share",
    Modify = "Modify",
    UseCommercially = "Use commercially",
    Unknown = "Unknown"
}
/**
 * *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record.
 *
 * @remarks
 *
 */
export declare class RecordT extends SpeakeasyBase {
    /**
     * There will always be at least 1 human-readable category label in this field.
     */
    category?: RecordCategoryEnum[];
    /**
     * In addition to the top level *"display_collection"* above, this field can also contain sub-collections or groupings within the main collection.
     *
     * @remarks
     *
     */
    collection?: string[];
    /**
     * For historic reasons this is a duplicate of the previous field ("collection").
     */
    collectionTitle?: string[];
    /**
     * Name of the organisation(s), institution(s), or individual(s) making content available through DigitalNZ. This metadata will be present on all records and is usually the name of the organisation that has agreed to the DigitalNZ Metadata Contribution Terms.
     */
    contentPartner?: string[];
    /**
     * A copyright statement applying to the object referenced by this record. This field may be empty.
     */
    copyright?: RecordCopyrightEnum[];
    /**
     * The date the record was initially harvested into DigitalNZ.
     */
    createdAt?: Date;
    /**
     * The name's of the people, organisations, institutions, services etc. who created the content (eg. the photographer, artist, writer or author).
     */
    creator?: string[];
    /**
     * Date information associated with this record (e.g. 1996-01-01T00:00:00.000Z). This field may be empty.
     */
    date?: string[];
    /**
     * Identifiers relating to the content from the content partner's system.
     */
    dcIdentifier?: string[];
    /**
     * Description of the record. Most records have a description.
     */
    description?: string;
    /**
     * The single main collection or website that the item belongs to. This metadata will be present on all records.
     */
    displayCollection?: string;
    /**
     * The main Content Partner, for cases when there are more than one. This metadata will be present on all records.
     */
    displayContentPartner?: string;
    /**
     * Where provided, this field contains a human readable version of the date information.
     */
    displayDate?: string;
    /**
     * All records have a unique identifier used within the DigitalNZ system.
     */
    id?: number;
    /**
     * This field will always contain a URL of the item on the content partner's website.
     *
     * @remarks
     * *Note:* Please use the source_url when providing HTML links.
     *
     */
    landingUrl?: string;
    /**
     * URL for a larger thumbnail image with a width of up to 800px. NOTE - the API Terms do not extend rights to the use of images accessable throught the *large_thumbnail_url* field.
     */
    largeThumbnailUrl?: string;
    /**
     * Geographical location information including latitude and longitude co-ordinates, text based location information, and details about where the location information comes from (eg. "Location provided by Museum of New Zealand Te Papa Tongarewa")
     *
     * @remarks
     *
     */
    locations?: RecordLocations[];
    /**
     * In most cases this is the same as *display_collection*, but will occasionally a second value.
     */
    primaryCollection?: string[];
    /**
     * Rights information. Can be a rights statement explaining the rights of the record or a link to a webpage with more detailed rights information.
     */
    rights?: string;
    /**
     * An array of HTTP URLs resolving to a rights statement or terms of use information for the resource.
     */
    rightsUrl?: string[];
    /**
     * This URL will always be present and provides a redirect to the landing_url. This link should be used as the main click-through to the content. Passing users through this link allows DNZ to count the number of click-throughs, as well as trigger link-checking activities that help clean up stale links in DigitalNZ.
     */
    sourceUrl?: string;
    /**
     * Keywords about the content.
     */
    subject?: string[];
    /**
     * URL for a thumbnail image of the content. The size varies depending on what is available but we aim for a width of 250px. This field is mostly populated on records with a 'category' of 'Images', but is also sometimes found on others (eg. "Videos").
     *
     * @remarks
     *
     */
    thumbnailUrl?: string;
    /**
     * Title of the record. All records should have a title.
     */
    title?: string;
    /**
     * The date the record was last updated/re-harvested into DigitalNZ.
     */
    updatedAt?: Date;
    /**
     * This field is always present and contains human-understandable information about how the item may be used based on its copyright/license.
     */
    usage?: RecordUsageEnum[];
}
