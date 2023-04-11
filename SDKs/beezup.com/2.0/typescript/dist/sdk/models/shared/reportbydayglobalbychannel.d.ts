import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
export declare class ReportByDayGlobalByChannel extends SpeakeasyBase {
    /**
     * The basic info related to a channel
     */
    channel: BeezUPCommonChannelBasicInfo;
    /**
     * Indicates the global performance indicator
     */
    performanceIndicator: number;
}
