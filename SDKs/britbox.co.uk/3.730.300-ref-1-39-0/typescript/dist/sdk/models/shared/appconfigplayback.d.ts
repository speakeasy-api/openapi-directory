import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppConfigPlayback extends SpeakeasyBase {
    /**
     * The number of seconds before autoplay of next video.
     *
     * @remarks
     *
     * If set to 0 there will be no autoplay.
     *
     */
    chainPlayCountdown: number;
    /**
     * The number of seconds before the end of playback when the current video
     *
     * @remarks
     * should be minimized and user options are presented within the video player.
     *
     * If set to 0 there will be no squeezeback.
     *
     */
    chainPlaySqueezeback: number;
    /**
     * The number of minutes of user inactivity before autoplay is paused.
     *
     * @remarks
     *
     * If set to 0 there will be no autoplay timeout.
     *
     */
    chainPlayTimeout: number;
    /**
     * How often a heartbeat should be renewed during playback.
     */
    heartbeatFrequency: number;
    /**
     * An array of percentage points in which to fire off plabyack view events.
     *
     * @remarks
     * For example a value of 0.5 would indicate that an event should be
     * fired when the user is half way through the video.
     * Often known as quartiles when four equaly spread event points.
     *
     */
    viewEventPoints: number[];
}
