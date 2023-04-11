import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchedulesRequest extends SpeakeasyBase {
    /**
     * The list of channel ids to get schedules for.
     */
    channels: string[];
    /**
     * The date to target in ISO format, e.g. `2017-05-23` (converted to UTC - see main description).
     *
     * @remarks
     *
     * The base hour requested will belong to this date.
     *
     */
    date: Date;
    /**
     * The type of device the content is targeting.
     */
    device?: string;
    /**
     * The number of hours of schedules to load from the base `hour` parameter.
     *
     * @remarks
     *
     * This may be negative or positive depending on whether you want to load past or future schedules.
     *
     * Minimum value is -24, maximum is 24. A value of zero is invalid.
     *
     */
    duration: number;
    /**
     * The set of opt in feature flags which cause breaking changes to responses.
     *
     * @remarks
     *
     * While Rocket APIs look to avoid breaking changes under the active major version, the formats of responses
     * may need to evolve over this time.
     *
     * These feature flags allow clients to select which response formats they expect and avoid breaking
     * clients as these formats evolve under the current major version.
     *
     * ### Flags
     *
     * - `all` - Enable all flags. Useful for testing. _Don't use in production_.
     * - `idp` - Dynamic item detail pages with schedulable rows.
     * - `ldp` - Dynamic list detail pages with schedulable rows.
     * - `hb` - Hubble formatted image urls.
     * - `rpt` - Updated resume point threshold logic.
     * - `cas` - "Custom Asset Search", inlcude `customAssets` in search results.
     * - `lrl` - Do not pre-populate related list if more than `max_list_prefetch` down the page.
     * - `cd` - Custom Destination support.
     *
     * See the `feature-flags.md` for available flag details.
     *
     */
    ff?: shared.FeatureFlagsEnum[];
    /**
     * The base hour in the day, defined by the `date` parameter, you wish to load schedules for
     *
     * @remarks
     * (converted to UTC - see main description).
     *
     * From 0 to 23, where 0 is midnight.
     *
     */
    hour: number;
    /**
     * Flag indicating whether schedules should intersect or be contained in the
     *
     * @remarks
     * provided interval.
     *
     * If set to `true`, the result will contain all schedules where either
     * schedule start time or end time touches the provided interval.
     *
     * If set to `false`, only schedules fully contained in the given period
     * will be returned.
     *
     */
    intersect?: boolean;
    /**
     * Language code for the preferred language to be returned in the response.
     *
     * @remarks
     *
     * Parameter value is case-insensitive and should be
     *   - a valid 2 letter language code without region such as en, de
     *   - or with region such as en_us, en_au
     *
     * If undefined then defaults to 'en', unless the server has been configured
     * with a custom default.
     *
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    lang?: string;
    /**
     * The list of segments to filter the response by.
     */
    segments?: string[];
    /**
     * The active subscription code.
     */
    sub?: string;
}
export declare class GetSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of schedule lists for each channel requested.
     *
     * @remarks
     *
     * The order of the channels will match the order of channel ids passed during the request.
     *
     */
    itemScheduleLists?: shared.ItemScheduleList[];
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
