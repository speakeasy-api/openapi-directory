import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * Memberships List
 */
export declare class MembershipList extends SpeakeasyBase {
    /**
     * List of memberships.
     */
    memberships: Membership[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
