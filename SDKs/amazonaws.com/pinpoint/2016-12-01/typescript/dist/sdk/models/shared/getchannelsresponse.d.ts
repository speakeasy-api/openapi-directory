import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelsResponse } from "./channelsresponse";
/**
 * Success
 */
export declare class GetChannelsResponse extends SpeakeasyBase {
    /**
     * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
     */
    channelsResponse: ChannelsResponse;
}
