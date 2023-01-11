import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportByDayGlobalAllChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=performanceIndicator" })
  performanceIndicator: number;
}
