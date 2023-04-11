import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewAggregationValue } from "./productviewaggregationvalue";
import { ProductViewSummary } from "./productviewsummary";
/**
 * Success
 */
export declare class SearchProductsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    productViewAggregations?: Record<string, ProductViewAggregationValue[]>;
    productViewSummaries?: ProductViewSummary[];
}
