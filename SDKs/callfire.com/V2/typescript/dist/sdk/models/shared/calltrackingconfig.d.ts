import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalytics } from "./googleanalytics";
import { WeeklySchedule } from "./weeklyschedule";
/**
 * Call tracking configuration allows you track incoming calls, analyze, respond to customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)
 */
export declare class CallTrackingConfig extends SpeakeasyBase {
    /**
     * An id of sound file, played if caller can not be connected to transfer number for any reason
     */
    failedTransferSoundId?: number;
    /**
     * Google Analytics for Call Tracking
     */
    googleAnalytics?: GoogleAnalytics;
    /**
     * An id of sound file, played if call is answered
     */
    introSoundId?: number;
    /**
     * Records all inbound calls
     */
    recorded?: boolean;
    /**
     * Screens the incoming calls
     */
    screen?: boolean;
    /**
     * List of phone numbers in E.164 format (11-digit) are used for transfer. Example: 12132000384
     */
    transferNumbers?: string[];
    /**
     * Enables voicemail if call is not transferred
     */
    voicemail?: boolean;
    /**
     * An id of sound file, played if voicemail is enabled and a call isn't transferred
     */
    voicemailSoundId?: number;
    /**
     * Weekly schedule allows to schedule operations by day of week and time of the day
     */
    weeklySchedule?: WeeklySchedule;
    /**
     * An id of sound file, played if call is screened
     */
    whisperSoundId?: number;
}
