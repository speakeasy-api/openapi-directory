import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostExportRequest extends SpeakeasyBase {
    /**
     * Restrict results to contributions submitted to this assignment.
     */
    assignment?: string;
    /**
     * Included a combined file with all contribution text.
     */
    combined?: boolean;
    /**
     * Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
     */
    country?: string;
    /**
     * Limit results to contributions created after this date time.
     */
    createdAfter?: Date;
    /**
     * Limit results to contributions created before this date time.
     */
    createdBefore?: Date;
    /**
     * Media format to export; none, fullsize, tagged or original.
     */
    format?: string;
    /**
     * Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
     */
    geohash?: string;
    /**
     * Restrict results to contributions which have a publicly visible location.
     */
    hasLocation?: boolean;
    /**
     * Include individual text files for each contribution.
     */
    individual?: boolean;
    /**
     * Include raw JSON for each contribution.
     */
    json?: boolean;
    /**
     * Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
     */
    latLong?: string;
    /**
     * Restrict results to contributions which include a media file of the given type (ie. image / video)
     */
    mediaType?: string;
    /**
     * Restrict results to contributions which are fall under the jurisdiction by this user.
     */
    ownedBy?: string;
    /**
     * Restrict results to contributions whose headline text matches this keyword.
     */
    q?: string;
    /**
     * When limiting result by location with the latLong parameter, specify the radius in kilometers.
     */
    radius?: number;
    /**
     * Should exported media files be tagged with metadata. Deprecated; use format instead.
     */
    tagged?: boolean;
    /**
     * Locate a specific contribution by URL words
     */
    urlWords?: string;
    /**
     * Restrict results to contributions by this user identified by id.
     */
    user?: string;
}
export declare class PostExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An export job describing the state of an export job.
     */
    export?: shared.Export;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
