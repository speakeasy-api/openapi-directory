import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { ClosedDays } from "./closeddays";
import { JourneyChannelSettings } from "./journeychannelsettings";
import { JourneyLimits } from "./journeylimits";
import { JourneySchedule } from "./journeyschedule";
import { OpenHours } from "./openhours";
import { QuietTime } from "./quiettime";
import { StartCondition } from "./startcondition";
import { StateEnum } from "./stateenum";
/**
 * Provides information about the status, configuration, and other settings for a journey.
 */
export declare class JourneyResponse extends SpeakeasyBase {
    activities?: Record<string, Activity>;
    applicationId: string;
    closedDays?: ClosedDays;
    creationDate?: string;
    id: string;
    journeyChannelSettings?: JourneyChannelSettings;
    lastModifiedDate?: string;
    limits?: JourneyLimits;
    localTime?: boolean;
    name: string;
    openHours?: OpenHours;
    quietTime?: QuietTime;
    refreshFrequency?: string;
    refreshOnSegmentUpdate?: boolean;
    schedule?: JourneySchedule;
    sendingSchedule?: boolean;
    startActivity?: string;
    startCondition?: StartCondition;
    state?: StateEnum;
    waitForQuietTime?: boolean;
    tags?: Record<string, string>;
}
