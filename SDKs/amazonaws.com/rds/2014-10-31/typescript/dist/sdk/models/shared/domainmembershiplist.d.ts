import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Active Directory Domain membership record associated with the DB instance or cluster.
 */
export declare class DomainMembershipList extends SpeakeasyBase {
    domain?: string;
    fqdn?: string;
    iamRoleName?: string;
    status?: string;
}
