import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioDetail } from "./portfoliodetail";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreatePortfolioOutput extends SpeakeasyBase {
    portfolioDetail?: PortfolioDetail;
    tags?: Tag[];
}
