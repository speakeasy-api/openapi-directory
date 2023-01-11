import { SpeakeasyBase } from "../../../internal/utils";
import { LinkClickToOrderTypeEnum } from "./linkclicktoordertypeenum";
import { MarginTypeEnum } from "./margintypeenum";
import { PerformanceIndicatorFormula } from "./performanceindicatorformula";
export declare class ReportAdvancedFilters extends SpeakeasyBase {
    globalMarginPercent?: number;
    linkClickToOrderMaxDay?: number;
    linkClickToOrderType: LinkClickToOrderTypeEnum;
    marginType: MarginTypeEnum;
    onlyDirectSales: boolean;
    onlyPaymentValidatedOrders: boolean;
    performanceIndicatorFormula: PerformanceIndicatorFormula;
}
