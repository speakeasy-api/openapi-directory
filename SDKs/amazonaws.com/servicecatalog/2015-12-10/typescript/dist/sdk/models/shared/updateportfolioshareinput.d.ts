import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationNode } from "./organizationnode";
export declare class UpdatePortfolioShareInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accountId?: string;
    /**
     * Information about the organization node.
     */
    organizationNode?: OrganizationNode;
    portfolioId: string;
    sharePrincipals?: boolean;
    shareTagOptions?: boolean;
}
