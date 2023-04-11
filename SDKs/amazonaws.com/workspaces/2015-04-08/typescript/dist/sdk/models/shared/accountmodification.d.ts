import { SpeakeasyBase } from "../../../internal/utils";
import { DedicatedTenancyModificationStateEnumEnum } from "./dedicatedtenancymodificationstateenumenum";
import { DedicatedTenancySupportResultEnumEnum } from "./dedicatedtenancysupportresultenumenum";
/**
 * Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.
 */
export declare class AccountModification extends SpeakeasyBase {
    dedicatedTenancyManagementCidrRange?: string;
    dedicatedTenancySupport?: DedicatedTenancySupportResultEnumEnum;
    errorCode?: string;
    errorMessage?: string;
    modificationState?: DedicatedTenancyModificationStateEnumEnum;
    startTime?: Date;
}
