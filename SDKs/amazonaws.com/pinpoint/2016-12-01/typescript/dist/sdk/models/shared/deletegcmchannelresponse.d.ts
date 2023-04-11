import { SpeakeasyBase } from "../../../internal/utils";
import { GCMChannelResponse } from "./gcmchannelresponse";
/**
 * Success
 */
export declare class DeleteGcmChannelResponse extends SpeakeasyBase {
    /**
     * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
     */
    gcmChannelResponse: GCMChannelResponse;
}
