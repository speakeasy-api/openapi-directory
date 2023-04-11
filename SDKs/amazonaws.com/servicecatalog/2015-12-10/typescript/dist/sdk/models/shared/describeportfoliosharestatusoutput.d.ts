import { SpeakeasyBase } from "../../../internal/utils";
import { ShareDetails } from "./sharedetails";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * Success
 */
export declare class DescribePortfolioShareStatusOutput extends SpeakeasyBase {
    organizationNodeValue?: string;
    portfolioId?: string;
    portfolioShareToken?: string;
    shareDetails?: ShareDetails;
    status?: ShareStatusEnum;
}
