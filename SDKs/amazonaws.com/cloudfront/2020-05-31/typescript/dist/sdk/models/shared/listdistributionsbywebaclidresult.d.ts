import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionList } from "./distributionlist";
/**
 * The response to a request to list the distributions that are associated with a specified WAF web ACL.
 */
export declare class ListDistributionsByWebACLIdResult extends SpeakeasyBase {
    distributionList?: DistributionList;
}
