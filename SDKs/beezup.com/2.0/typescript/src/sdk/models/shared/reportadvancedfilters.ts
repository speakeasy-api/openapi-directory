import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkClickToOrderTypeEnum } from "./linkclicktoordertypeenum";
import { MarginTypeEnum } from "./margintypeenum";
import { PerformanceIndicatorFormula } from "./performanceindicatorformula";



export class ReportAdvancedFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=globalMarginPercent" })
  globalMarginPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=linkClickToOrderMaxDay" })
  linkClickToOrderMaxDay?: number;

  @SpeakeasyMetadata({ data: "json, name=linkClickToOrderType" })
  linkClickToOrderType: LinkClickToOrderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=marginType" })
  marginType: MarginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=onlyDirectSales" })
  onlyDirectSales: boolean;

  @SpeakeasyMetadata({ data: "json, name=onlyPaymentValidatedOrders" })
  onlyPaymentValidatedOrders: boolean;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicatorFormula" })
  performanceIndicatorFormula: PerformanceIndicatorFormula;
}
