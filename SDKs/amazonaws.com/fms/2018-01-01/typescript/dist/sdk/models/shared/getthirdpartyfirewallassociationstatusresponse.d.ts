import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceSubscriptionOnboardingStatusEnum } from "./marketplacesubscriptiononboardingstatusenum";
import { ThirdPartyFirewallAssociationStatusEnum } from "./thirdpartyfirewallassociationstatusenum";
/**
 * Success
 */
export declare class GetThirdPartyFirewallAssociationStatusResponse extends SpeakeasyBase {
    marketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatusEnum;
    thirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatusEnum;
}
