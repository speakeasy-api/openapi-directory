import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioDetail } from "./portfoliodetail";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class UpdatePortfolioOutput extends SpeakeasyBase {
    portfolioDetail?: PortfolioDetail;
    tags?: Tag[];
}
