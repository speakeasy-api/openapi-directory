import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyFirewallEnum } from "./thirdpartyfirewallenum";
export declare class ListThirdPartyFirewallFirewallPoliciesRequest extends SpeakeasyBase {
    maxResults: number;
    nextToken?: string;
    thirdPartyFirewall: ThirdPartyFirewallEnum;
}
