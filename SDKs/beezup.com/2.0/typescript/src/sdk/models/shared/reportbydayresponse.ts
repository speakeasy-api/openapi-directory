import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByDay } from "./reportbyday";
import { ReportByDayGlobal } from "./reportbydayglobal";



export class ReportByDayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=days", elemType: ReportByDay })
  days?: ReportByDay[];

  @SpeakeasyMetadata({ data: "json, name=globalPerformanceIndicators" })
  globalPerformanceIndicators?: ReportByDayGlobal;
}
