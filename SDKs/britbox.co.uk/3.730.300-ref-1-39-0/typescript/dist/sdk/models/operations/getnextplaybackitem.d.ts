import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNextPlaybackItemSecurity extends SpeakeasyBase {
    profileAuth: string;
}
/**
 * If no value is specified no dependencies are expanded.
 *
 * @remarks
 *
 * If 'parent' is specified then only the direct parent will be expanded.
 * For example if an `Episode` then the `Season` would be included.
 *
 * If 'ancestors' is specified then the full parent chain is expanded.
 * For example if an `Episode` then both the `Season` and `Show` would be included.
 *
 */
export declare enum GetNextPlaybackItemExpandEnum {
    Parent = "parent",
    Ancestors = "ancestors"
}
export declare class GetNextPlaybackItemRequest extends SpeakeasyBase {
    /**
     * The type of device the content is targeting.
     */
    device?: string;
    /**
     * If no value is specified no dependencies are expanded.
     *
     * @remarks
     *
     * If 'parent' is specified then only the direct parent will be expanded.
     * For example if an `Episode` then the `Season` would be included.
     *
     * If 'ancestors' is specified then the full parent chain is expanded.
     * For example if an `Episode` then both the `Season` and `Show` would be included.
     *
     */
    expand?: GetNextPlaybackItemExpandEnum;
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
     * The identifier of the source item to base the next to watch item off.
     *
     * @remarks
     *
     */
    itemId: string;
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
     * The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.
     */
    maxRating?: string;
    /**
     * The list of segments to filter the response by.
     */
    segments?: string[];
    /**
     * The active subscription code.
     */
    sub?: string;
}
export declare class GetNextPlaybackItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The detail of the next item to play.
     */
    nextPlaybackItem?: shared.NextPlaybackItem;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
