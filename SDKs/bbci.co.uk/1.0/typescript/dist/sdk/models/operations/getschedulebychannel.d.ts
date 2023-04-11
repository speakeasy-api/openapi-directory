import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduleByChannelRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The channel identifier to limit results to.
     */
    channel: string;
    /**
     * The date to return the schedule for, yyyy-mm-dd format
     */
    date: string;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
}
export declare class GetScheduleByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
