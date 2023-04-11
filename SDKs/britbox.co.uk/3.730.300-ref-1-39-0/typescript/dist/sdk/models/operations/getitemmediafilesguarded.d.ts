import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemMediaFilesGuardedSecurity extends SpeakeasyBase {
    accountAuth: string;
}
export declare class GetItemMediaFilesGuardedRequest extends SpeakeasyBase {
    /**
     * The video delivery type you require.
     */
    delivery: shared.MediaFileDeliveryEnum[];
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
     * The set of media file formats that the device supports, in the order of preference.
     *
     * @remarks
     *
     * When provided, Rocket API returns only media files in formats specified in this parameter. For each resolution, only the first media file of matching supported format is returned. Files of different resolutions may be of different supported media file formats.
     *
     * `external` value is reserved for project customizations where the real MIME type of the file on the specified URL is unknown at the time of ingestion.
     *
     * When not provided, Rocket API uses the legacy `User-Agent` header-based logic to find matching media files.
     *
     */
    formats?: shared.MediaFileFormatsEnum[];
    /**
     * The identifier of the item whose video files to load.
     */
    id: string;
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
     * The maximum resolution the device to playback the media can present.
     */
    resolution: shared.MediaFileResolutionEnum;
    /**
     * The list of segments to filter the response by.
     */
    segments?: string[];
    /**
     * The active subscription code.
     */
    sub?: string;
}
export declare class GetItemMediaFilesGuardedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The list of video files available.
     *
     * @remarks
     * The first entry containing what is predicted to be the best match.
     *
     */
    mediaFiles?: shared.MediaFile[];
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
