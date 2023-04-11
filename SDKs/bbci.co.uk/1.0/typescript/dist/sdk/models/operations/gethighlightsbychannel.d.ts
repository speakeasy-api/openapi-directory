import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHighlightsByChannelRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The channel identifier to limit results to.
     */
    channel: string;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * Whether to include live programmes
     */
    live?: boolean;
    /**
     * Request additional data in the output
     */
    mixin?: shared.MixinEnum;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
}
export declare class GetHighlightsByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
