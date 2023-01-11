import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByDayAllChannels } from "./reportbydayallchannels";
import { ReportByDayByChannel } from "./reportbydaybychannel";



export class ReportByDay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allChannels" })
  allChannels: ReportByDayAllChannels;

  @SpeakeasyMetadata({ data: "json, name=byChannels", elemType: ReportByDayByChannel })
  byChannels: ReportByDayByChannel[];

  @SpeakeasyMetadata({ data: "json, name=day" })
  day: Date;
}
