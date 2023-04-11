import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAbilityEnum } from "./memberabilityenum";
/**
 * Basic metadata used to construct a new member.
 */
export declare class MemberSpecification extends SpeakeasyBase {
    accountId: string;
    displayName: string;
    memberAbilities: MemberAbilityEnum[];
}
