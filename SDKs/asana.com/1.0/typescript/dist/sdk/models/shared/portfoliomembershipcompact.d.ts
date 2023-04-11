import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";
/**
 * This object determines if a user is a member of a portfolio.
 */
export declare class PortfolioMembershipCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    portfolio?: PortfolioCompact;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    user?: UserCompact;
}
