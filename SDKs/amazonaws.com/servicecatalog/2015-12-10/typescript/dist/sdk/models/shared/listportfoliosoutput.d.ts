import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioDetail } from "./portfoliodetail";
/**
 * Success
 */
export declare class ListPortfoliosOutput extends SpeakeasyBase {
    nextPageToken?: string;
    portfolioDetails?: PortfolioDetail[];
}
