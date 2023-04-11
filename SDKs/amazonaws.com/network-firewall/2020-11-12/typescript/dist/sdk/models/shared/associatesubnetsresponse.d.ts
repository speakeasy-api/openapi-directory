import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetMapping } from "./subnetmapping";
/**
 * Success
 */
export declare class AssociateSubnetsResponse extends SpeakeasyBase {
    firewallArn?: string;
    firewallName?: string;
    subnetMappings?: SubnetMapping[];
    updateToken?: string;
}
