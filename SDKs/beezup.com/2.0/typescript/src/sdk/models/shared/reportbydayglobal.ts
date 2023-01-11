import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByDayGlobalAllChannels } from "./reportbydayglobalallchannels";
import { ReportByDayGlobalByChannel } from "./reportbydayglobalbychannel";



export class ReportByDayGlobal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allChannels" })
  allChannels: ReportByDayGlobalAllChannels;

  @SpeakeasyMetadata({ data: "json, name=byChannels", elemType: ReportByDayGlobalByChannel })
  byChannels: ReportByDayGlobalByChannel[];
}
