import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";



// PortfolioMembershipResponse
/** 
 * This object determines if a user is a member of a portfolio.
**/
export class PortfolioMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=portfolio" })
  portfolio?: PortfolioCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;
}
