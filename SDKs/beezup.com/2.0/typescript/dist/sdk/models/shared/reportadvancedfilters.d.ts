import { SpeakeasyBase } from "../../../internal/utils";
import { LinkClickToOrderTypeEnum } from "./linkclicktoordertypeenum";
import { MarginTypeEnum } from "./margintypeenum";
import { PerformanceIndicatorFormula } from "./performanceindicatorformula";
export declare class ReportAdvancedFilters extends SpeakeasyBase {
    /**
     * If the margin type is 'Global', indicate the percentage of sale price.
     */
    globalMarginPercent?: number;
    /**
     * If the linkOrderType is OnClickDate, indicate the max day to search the click from the order
     */
    linkClickToOrderMaxDay?: number;
    linkClickToOrderType: LinkClickToOrderTypeEnum;
    marginType: MarginTypeEnum;
    /**
     * If true, you will get only direct sales. Otherwise the indirect sales will be included.
     */
    onlyDirectSales: boolean;
    /**
     * If true, you will get the only the orders with payment validated. Otherwise, you will get all orders validated or not.
     */
    onlyPaymentValidatedOrders: boolean;
    /**
     * The KPI formula
     */
    performanceIndicatorFormula: PerformanceIndicatorFormula;
}
