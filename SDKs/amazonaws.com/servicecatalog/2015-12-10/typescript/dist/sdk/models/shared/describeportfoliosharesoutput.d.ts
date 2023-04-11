import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioShareDetail } from "./portfoliosharedetail";
/**
 * Success
 */
export declare class DescribePortfolioSharesOutput extends SpeakeasyBase {
    nextPageToken?: string;
    portfolioShareDetails?: PortfolioShareDetail[];
}
