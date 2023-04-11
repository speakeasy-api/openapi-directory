import { SpeakeasyBase } from "../../../internal/utils";
import { AnywhereConfiguration } from "./anywhereconfiguration";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
export declare class UpdateFleetAttributesInput extends SpeakeasyBase {
    anywhereConfiguration?: AnywhereConfiguration;
    description?: string;
    fleetId: string;
    metricGroups?: string[];
    name?: string;
    newGameSessionProtectionPolicy?: ProtectionPolicyEnum;
    resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
}
