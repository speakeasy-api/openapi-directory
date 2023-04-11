import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBroadcastsByChannelRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The channel identifier to limit results to.
     */
    channel: string;
    /**
     * Time to return results from, e.g. -3h
     */
    from?: string;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * Request additional data in the output
     */
    mixin?: shared.MixinEnum;
    /**
     * The number of results to return.
     */
    perPage: number;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
}
export declare class GetBroadcastsByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
