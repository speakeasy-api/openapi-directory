import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see <a href="/api-docs/sell/static/marketing/pm-summary-reports.html">Reading item promotion Summary reports</a>.
 */
export declare class SummaryReportResponse extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    baseSale?: Amount;
    /**
     * The date the report was generated.
     */
    lastUpdated?: string;
    /**
     * The percentage of the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br><b>precentageSalesLift</b> = <b>promotionSale</b> / (<b>baseSale</b> + <b>promotionSale</b>)
     */
    percentageSalesLift?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    promotionSale?: Amount;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    totalSale?: Amount;
}
