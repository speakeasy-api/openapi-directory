import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByCategoryLinks } from "./reportbycategorylinks";
export declare class ReportByCategory extends SpeakeasyBase {
    allProductCount: number;
    catalogCategoryId: string;
    catalogCategoryPath?: string[];
    catalogProductCount: number;
    clickCount: number;
    cost: number;
    enabledProductCount: number;
    links: ReportByCategoryLinks;
    margin?: number;
    orderCount: number;
    performanceIndicator: number;
    roi?: number;
    soldProductCount: number;
    totalSales: number;
}
