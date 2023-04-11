import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * These are the same categories that are used across the tabs in [digitalnz.org](https://digitalnz.org/records?text=&tab=Videos)
 */
export declare enum GetRecordsFormatAndCategoryEnum {
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
/**
 * Filters results to only those records that have an image available in the *large_thumbnail_url* field.
 *
 * @remarks
 * **Note:** There is an issue with this field where, in order to get results, it needs to be specified with "Y" or not specified at all.
 *
 */
export declare enum GetRecordsFormatAndHasLargeThumbnailUrlEnum {
    Y = "Y"
}
/**
 * Filters results to only those records that have latitude and longitude coordinates present in the metadata.
 *
 * @remarks
 *
 * *Tip* - To see the location metadata you'll need to specifically request that field using the *fields* parameter - *"&fields=verbose,locations"*  as it is not part of the default, or verbose field sets.
 *
 */
export declare enum GetRecordsFormatAndHasLatLngEnum {
    True = "true",
    False = "false"
}
export declare enum GetRecordsFormatAndUsageEnum {
    Share = "Share",
    Modify = "Modify",
    UseCommercially = "Use commercially",
    AllRightsReserved = "All rights reserved",
    Unknown = "Unknown"
}
/**
 * Used in conjunction with *sort* to order the results
 *
 * @remarks
 *  - *asc* - Ascending, oldest first.
 *  - *desc* - Descending, newest first.
 *
 */
export declare enum GetRecordsFormatDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetRecordsFormatFacetsEnum {
    Category = "category",
    ContentPartner = "content_partner",
    DisplayCollection = "display_collection",
    Collection = "collection",
    Creator = "creator",
    Placename = "placename",
    Date = "date",
    Year = "year",
    Decade = "decade",
    Century = "century",
    Language = "language",
    Rights = "rights",
    Usage = "usage",
    Copyright = "copyright",
    Subject = "subject",
    Format = "format",
    DcType = "dc_type"
}
/**
 * Used to control the order of the results in conjunction with the *direction* field.
 *
 * @remarks
 *   - *syndication_date* - is the creation date of the record within DigitalNZ, ie. when DigitalNZ first harvested the record.
 *   - *date* - is the date metadata (if present) associated with the record.
 *
 * To sort the search results with newest records at the top use: "&sort=syndication_date&direction=desc"
 *
 */
export declare enum GetRecordsFormatSortEnum {
    SyndicationDate = "syndication_date",
    Date = "date"
}
export declare class GetRecordsFormatRequest extends SpeakeasyBase {
    /**
     * The DigitalNZ API no longer requires a key to access public content. However, if you plan on using the API regularly, expect to be a high volume consumer or are planning on creating an application, we encourage you to use an API key so that we can:
     *
     * @remarks
     * - provide targeted help and support
     * - increase your query throughput (by negotiation)
     * - notify you directly of changes to the API
     * - gather usage metrics to help improve the service
     *
     * API requests that do not pass a valid API key/token are treated as unauthenticated. A maximum rate limit applies across all unauthenticated requests. This rate limit is in place to protect the service from overuse, resulting in unsustainable costs, or potential attack.
     *
     * **Getting an API key**
     * [Create a DigitalNZ account](https://digitalnz.org/sign_up), log in and select "[my API key](https://digitalnz.org/api_keys/edit)" from your username drop-down menu (on the right hand side)'. The key is a long string of jumbled letters and numbers (hash) that is unique to you. You are required to keep the key secret. (Refer to the [Developer API Terms of Use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use) for more information).
     *
     * **Using an API key**
     * When you make a call to the API you'll need to pass the key in a custom HTTP header: ‘Authentication-Token’.
     * For example, a query using the ‘curl’ command might look like the following (where ‘{YOUR_API_KEY}’ is replaced with a valid API key):
     *
     * `curl -H "Authentication-Token:{YOUR_API_KEY}" http://api.digitalnz.org/v3/records.json?text=kiwi`
     *
     */
    authenticationToken?: string;
    /**
     * These are the same categories that are used across the tabs in [digitalnz.org](https://digitalnz.org/records?text=&tab=Videos)
     */
    andCategory?: GetRecordsFormatAndCategoryEnum;
    /**
     * This field allows searching specifically by century. The metadata is derived from the same date information that is searchable and returned in the date field.
     *
     * @remarks
     * Example: `"1900"` `"2000"`
     *
     */
    andCentury?: string;
    /**
     * Allows filtering for records from a particular Collection. Collections can be thought of as sub-collections or groupings under Primary_Collections.
     *
     * @remarks
     * Examples: `"Music 101"` `"Mollusks"` `"Wairarapa Daily Times"`
     *
     * *Tip* - To see a list of Collections available for filtering use the *facets* parameter, eg. *"&facets=collection"*.
     *
     */
    andCollection?: string;
    /**
     * Allows filtering for records from a particular Content Partner.
     *
     * @remarks
     * Examples: `"Ministry for Culture and Heritage"` `"Trove"` `"V.C. Browne & Son"`
     *
     * *Tip* - To see a list of Content Partners available for filtering use the *facets* parameter, eg. *"&facets=content_partner"*.
     *
     */
    andContentPartner?: string;
    /**
     * Examples: `"Revelle Jackson"` `"Nicholas Chevalier"` `"Rita Angus"`
     *
     * @remarks
     *
     */
    andCreator?: string;
    /**
     * This field can be useful for querying and sorting (see the 'sort' param further down). But it should be noted that, as with some other fields, **not all records have date metadata associated**. There is good coverage of date metadata within certain collections, but there are plenty with no date information at all. So, if you query for records from a specific date you may get some matching results, but might also be missing other potentially relevant records that don't have date metadata available.
     *
     * @remarks
     * Example: `"1970-12-25"`
     *
     * *Tip* - There is a related (but not searchable) field that is returned on each record (where available), that often has a more human readable version of the date information, called 'display_date'.
     *
     */
    andDate?: string;
    /**
     * Examples: `"Conference item"` `"Magazines"`
     *
     * @remarks
     *
     */
    andDcType?: string;
    /**
     * This field allows searching specifically by decade. The metadata is derived from the same date information that is searchable and returned in the date field.
     *
     * @remarks
     * Example: `"1850"` `"1990"`
     *
     */
    andDecade?: string;
    /**
     * Examples: `"Photolithographs"` `"Glass*"`
     *
     * @remarks
     *
     */
    andFormat?: string;
    /**
     * Filters results to only those records that have an image available in the *large_thumbnail_url* field.
     *
     * @remarks
     * **Note:** There is an issue with this field where, in order to get results, it needs to be specified with "Y" or not specified at all.
     *
     */
    andHasLargeThumbnailUrl?: GetRecordsFormatAndHasLargeThumbnailUrlEnum;
    /**
     * Filters results to only those records that have latitude and longitude coordinates present in the metadata.
     *
     * @remarks
     *
     * *Tip* - To see the location metadata you'll need to specifically request that field using the *fields* parameter - *"&fields=verbose,locations"*  as it is not part of the default, or verbose field sets.
     *
     */
    andHasLatLng?: GetRecordsFormatAndHasLatLngEnum;
    /**
     * Some DigitalNZ partners offer their metadata for use in commercial applications. This content can be identified through the *is_commercial_use* flag. Only API results where the *is_commercial_use* field set to True can be used for commercial purposes. Check out the [terms of use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use#commercial_use_terms) for more information.
     *
     * @remarks
     *
     */
    andIsCommercialUse?: boolean;
    /**
     * All of the above `and[___][]` filters in this document are also able to be used with the `and[or][___][]` syntax to allow multi-select *OR* queries within one field.
     *
     * @remarks
     * Basic example:
     * - To filter your results to only those with a category or Audio or Videos:
     * `&and[or][category][]=Audio&and[or][category][]=Videos`
     *
     * In order to combine *OR* filters across multiple fields the syntax needs to be nested as follows
     * Nested examples:
     *  - To search for *(year is 2014 OR 2015) AND (primary_collection is TAPUHI OR Public Address)*
     *  `&and[or][year][]=2015&and[or][year][]=2014&and[and][or][primary_collection][]=TAPUHI&and[and][or][primary_collection][]=Public+Address`
     *  - To search for *(category is Images OR Video) AND (subject is cat OR cats)*
     *  `&and[or][category][]=Images&and[or][category][]=Videos&and[and][or][subject][]=cat&and[and][or][subject][]=cats`
     *
     */
    andOrFilterField?: string;
    /**
     * This field can be used for text-based location search. For a more advanced coordinate-based search, see the "geo_bbox" field below.
     *
     * @remarks
     * Examples: `"Scott Base"` `"Wainuiomata"` `"castle*"`
     *
     */
    andPlacename?: string;
    /**
     * Allows filtering for records from a particular *primary_collection*.
     *
     * @remarks
     * Examples: `"Puke Ariki"` `"NZHistory"` `"TAPUHI"`
     *
     * *Tip* - To see a list of Primary_Collections available for filtering use the *facets* parameter, eg. *"&facets=primary_collection"*.
     *
     */
    andPrimaryCollection?: string;
    /**
     * Examples: `"Cats"` `"Weddings"` `"climb*"`
     *
     * @remarks
     *
     */
    andSubject?: string;
    /**
     * Examples: `"Pukeko"` `"Club"` `"Break*"`"
     *
     * @remarks
     *
     */
    andTitle?: string;
    andUsage?: GetRecordsFormatAndUsageEnum;
    /**
     * This field allows searching specifically by year. The metadata is derived from the same date information that is searchable and returned in the date field. It is possible to search across a range using syntax the following syntax `[{start year} TO {end year}]`.
     *
     * @remarks
     * Example: `"1893"` `"[1982 TO 1987]"`
     *
     */
    andYear?: string;
    /**
     * Used in conjunction with *sort* to order the results
     *
     * @remarks
     *  - *asc* - Ascending, oldest first.
     *  - *desc* - Descending, newest first.
     *
     */
    direction?: GetRecordsFormatDirectionEnum;
    /**
     * This field can be used when filtering into some facets, to maintain the context of the wider facet values. A common use case is to allow the results of a search to be filtered down into a specific category (eg Audio), while still showing the other possible filter options as facet counts (eg. Images, Audio, Video, etc). Setting this to 'true' will not effect the search results returned but will ignore all search filters (eg. "and[category]=Audio") when calculating the facet counts.
     *
     * @remarks
     *
     */
    excludeFiltersFromFacets?: boolean;
    /**
     * Shows a breakdown of record counts for the specified facets based on the current result set. In the [DigitalNZ search interface](https://digitalnz.org/records) these facets are used to list the values filterable for each field. A comma-separated list will return multiple facets in one call.
     *
     * @remarks
     *
     */
    facets?: GetRecordsFormatFacetsEnum[];
    /**
     * This value specifies which page of facet results to return. Allowing pagination through large lists of facet values.
     */
    facetsPage?: number;
    /**
     * The number of facets to return per page of facet results.
     */
    facetsPerPage?: number;
    /**
     * Comma-separated whitelist of fields to be returned. The syntax *"&fields=verbose"* can be used to return the bulk of the fields, or you can customise which fields you are interested in, eg. *"&fields=id,title,subject,collection,landing_url,locations"*.
     *
     * @remarks
     *
     */
    fields?: string;
    /**
     * Note - There is a small difference with some field names in the response between JSON and XML.
     *
     * @remarks
     * When a field name has more than one word, JSON format will separate the words with an underscore, eg. "content_partner", whereas XML uses a hyphenated naming convention, eg. "content-partner".
     *
     */
    format: shared.FormatEnum;
    /**
     * A geographic bounding box scoping a search to a geographic region. Order of latitude-longitude coordinates is north, west, south, east.   For example, filtering the Wellington region would be *"&geo_bbox=-41,174,-42,175"*
     *
     * @remarks
     *
     */
    geoBbox?: string;
    /**
     * Specify which page of results to return.
     */
    page?: number;
    /**
     * The number of records to return per page of search results.
     */
    perPage?: number;
    /**
     * Used to control the order of the results in conjunction with the *direction* field.
     *
     * @remarks
     *   - *syndication_date* - is the creation date of the record within DigitalNZ, ie. when DigitalNZ first harvested the record.
     *   - *date* - is the date metadata (if present) associated with the record.
     *
     * To sort the search results with newest records at the top use: "&sort=syndication_date&direction=desc"
     *
     */
    sort?: GetRecordsFormatSortEnum;
    /**
     * This field enables queries based on one or more search terms and provides the functionality of the main search box on [digitalnz.org](https://digitalnz.org). Search terms can be combined with boolean operators (AND, OR).
     *
     * @remarks
     * A minus sign excludes certain terms, eg. "-horse".
     * An asterisk (\*) acts as a wildcard, eg. "ted*".
     * Multiple search terms are combined with an AND by default.
     * Examples: `"moustache"`, `"Wanganui OR Whanganui"`,  `"-paperspast"`, `"ted*"`
     *
     */
    text?: string;
    /**
     * All of the above `and[___][]` filters in this document are also able to be used with this syntax to exclude specific matches. For example to exclude Papers Past content `&without[primary_collection]=Papers+Past`
     *
     * @remarks
     *
     */
    withoutFilterField?: string;
}
/**
 * search results matching criteria
 */
export declare class GetRecordsFormat200ApplicationJSON extends SpeakeasyBase {
    /**
     * Each field you request from the list of facetable fields will be returned as separate elements. Each of those will contain a sorted list of elements that are made up of a value (eg collection name, subject, date) and the number of results associated with that value.
     *
     * @remarks
     *
     */
    facets?: Record<string, Record<string, number>>;
    /**
     * Current page.
     */
    page?: number;
    /**
     * Requested amount of records shown per page of results.
     */
    perPage?: number;
    records?: shared.RecordT[];
    /**
     * The URL of current page of results.
     */
    requestUrl?: string;
    /**
     * Total number of matching search results.
     */
    resultCount?: number;
}
export declare class GetRecordsFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    getRecordsFormat200ApplicationJSONObject?: GetRecordsFormat200ApplicationJSON;
    /**
     * Incorrect field specified in the request.
     */
    getRecordsFormat400ApplicationJSONObject?: Record<string, any>;
    /**
     * API Key (Authentication-Token) is invalid.
     */
    getRecordsFormat403ApplicationJSONObject?: Record<string, any>;
}
