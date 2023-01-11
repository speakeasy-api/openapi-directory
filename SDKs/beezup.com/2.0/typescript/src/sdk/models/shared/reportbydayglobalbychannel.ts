import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";



export class ReportByDayGlobalByChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: BeezUpCommonChannelBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicator" })
  performanceIndicator: number;
}
