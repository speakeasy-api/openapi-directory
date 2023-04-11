import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { PortfolioDetail } from "./portfoliodetail";
import { Tag } from "./tag";
import { TagOptionDetail } from "./tagoptiondetail";
/**
 * Success
 */
export declare class DescribePortfolioOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    portfolioDetail?: PortfolioDetail;
    tagOptions?: TagOptionDetail[];
    tags?: Tag[];
}
