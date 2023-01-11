import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByDayAllChannels } from "./reportbydayallchannels";
import { ReportByDayByChannel } from "./reportbydaybychannel";
export declare class ReportByDay extends SpeakeasyBase {
    allChannels: ReportByDayAllChannels;
    byChannels: ReportByDayByChannel[];
    day: Date;
}
