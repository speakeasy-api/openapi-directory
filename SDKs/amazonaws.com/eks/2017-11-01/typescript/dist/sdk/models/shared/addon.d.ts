import { SpeakeasyBase } from "../../../internal/utils";
import { AddonHealth } from "./addonhealth";
import { AddonStatusEnum } from "./addonstatusenum";
import { MarketplaceInformation } from "./marketplaceinformation";
/**
 * An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.
 */
export declare class Addon extends SpeakeasyBase {
    addonArn?: string;
    addonName?: string;
    addonVersion?: string;
    clusterName?: string;
    configurationValues?: string;
    createdAt?: Date;
    health?: AddonHealth;
    marketplaceInformation?: MarketplaceInformation;
    modifiedAt?: Date;
    owner?: string;
    publisher?: string;
    serviceAccountRoleArn?: string;
    status?: AddonStatusEnum;
    tags?: Record<string, string>;
}
