import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { FirewallPolicy } from "./firewallpolicy";
export declare class UpdateFirewallPolicyRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    encryptionConfiguration?: EncryptionConfiguration;
    firewallPolicy: FirewallPolicy;
    firewallPolicyArn?: string;
    firewallPolicyName?: string;
    updateToken: string;
}
