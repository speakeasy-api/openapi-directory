import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";
/**
 * The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.
 */
export declare class FirewallPolicyResponse extends SpeakeasyBase {
    consumedStatefulRuleCapacity?: number;
    consumedStatelessRuleCapacity?: number;
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    firewallPolicyArn: string;
    firewallPolicyId: string;
    firewallPolicyName: string;
    firewallPolicyStatus?: ResourceStatusEnum;
    lastModifiedTime?: Date;
    numberOfAssociations?: number;
    tags?: Tag[];
}
