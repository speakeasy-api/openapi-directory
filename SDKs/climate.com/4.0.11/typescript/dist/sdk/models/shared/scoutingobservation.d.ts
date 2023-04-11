import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
import { ScoutingTag } from "./scoutingtag";
/**
 * Color of scouting pin assigned in the Climate FieldView app.
 *
 * @remarks
 * Limited in the Ux to a set of RGB values.
 * * #307af7
 * * #38d753
 * * #b037e4
 * * #ef3e3e
 * * #f7ec41
 * * #ff8439
 * * #808080
 *
 */
export declare enum ScoutingObservationLocationDisplayColorEnum {
    Number307af7 = "#307af7",
    Number38d753 = "#38d753",
    NumberB037e4 = "#b037e4",
    NumberEf3e3e = "#ef3e3e",
    NumberF7ec41 = "#f7ec41",
    NumberFf8439 = "#ff8439",
    Number808080 = "#808080"
}
/**
 * The status of the scouting observation For example : ACTIVE, DELETED
 */
export declare enum ScoutingObservationStatusEnum {
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * Permanent or seasonal
 */
export declare enum ScoutingObservationTimespanEnum {
    Permanent = "PERMANENT",
    Seasonal = "SEASONAL"
}
/**
 * Returns the requested scouting observation.
 */
export declare class ScoutingObservation extends SpeakeasyBase {
    /**
     * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    endTime: Date;
    /**
     * Array of field ids associated with this observation.
     */
    fieldIds: string[];
    /**
     * The id of a scouting observation.
     */
    id: string;
    /**
     * GeoJSON
     */
    location: Geometry;
    /**
     * Color of scouting pin assigned in the Climate FieldView app.
     *
     * @remarks
     * Limited in the Ux to a set of RGB values.
     * * #307af7
     * * #38d753
     * * #b037e4
     * * #ef3e3e
     * * #f7ec41
     * * #ff8439
     * * #808080
     *
     */
    locationDisplayColor: ScoutingObservationLocationDisplayColorEnum;
    /**
     * The text of the scouting observation. Maximum of 4000 characters.
     */
    note: string;
    /**
     * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    startTime: Date;
    /**
     * The status of the scouting observation For example : ACTIVE, DELETED
     */
    status: ScoutingObservationStatusEnum;
    /**
     * For example, ROCK_STONE, PONDING_WET, HAIL Maximum 20 tags allowed, 40 characters per tag.
     */
    tags: ScoutingTag[];
    /**
     * Permanent or seasonal
     */
    timespan: ScoutingObservationTimespanEnum;
    /**
     * The title or summary of the scouting observation. 40 Characters long, no emojis, and leading and trailing whitespace will be trimmed.
     */
    title: string;
    /**
     * The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    updatedAt: Date;
}
