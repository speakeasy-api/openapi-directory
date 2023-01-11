import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByDayGlobalAllChannels } from "./reportbydayglobalallchannels";
import { ReportByDayGlobalByChannel } from "./reportbydayglobalbychannel";
export declare class ReportByDayGlobal extends SpeakeasyBase {
    allChannels: ReportByDayGlobalAllChannels;
    byChannels: ReportByDayGlobalByChannel[];
}
