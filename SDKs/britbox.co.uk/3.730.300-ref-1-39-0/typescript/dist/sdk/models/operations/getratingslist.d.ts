import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRatingsListSecurity extends SpeakeasyBase {
    profileAuth: string;
}
/**
 * What to order by.
 *
 * @remarks
 *
 * Ordering by `date-modified` equates to ordering by the last rated date.
 *
 */
export declare enum GetRatingsListOrderByEnum {
    DateAdded = "date-added",
    DateModified = "date-modified"
}
export declare class GetRatingsListRequest extends SpeakeasyBase {
    /**
     * The type of device the content is targeting.
     */
    device?: string;
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
     * The item type to filter by. Defaults to unspecified.
     */
    itemType?: shared.ItemTypeEnum;
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
     * The list sort order, either 'asc' or 'desc'.
     */
    order?: shared.ListOrderEnum;
    /**
     * What to order by.
     *
     * @remarks
     *
     * Ordering by `date-modified` equates to ordering by the last rated date.
     *
     */
    orderBy?: GetRatingsListOrderByEnum;
    /**
     * The page of items to load. Starts from page 1.
     */
    page?: number;
    /**
     * The number of items to return in a page.
     */
    pageSize?: number;
    /**
     * The list of segments to filter the response by.
     */
    segments?: string[];
    /**
     * The active subscription code.
     */
    sub?: string;
}
export declare class GetRatingsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The list of items requested.
     */
    itemList?: shared.ItemList;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
