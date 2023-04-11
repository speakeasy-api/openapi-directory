import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { FirewallPolicy } from "./firewallpolicy";
import { Tag } from "./tag";
export declare class CreateFirewallPolicyRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    encryptionConfiguration?: EncryptionConfiguration;
    firewallPolicy: FirewallPolicy;
    firewallPolicyName: string;
    tags?: Tag[];
}
