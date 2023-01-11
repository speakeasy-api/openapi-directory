import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";
/**
 * This object determines if a user is a member of a portfolio.
**/
export declare class PortfolioMembershipCompact extends SpeakeasyBase {
    gid?: string;
    portfolio?: PortfolioCompact;
    resourceType?: string;
    user?: UserCompact;
}
