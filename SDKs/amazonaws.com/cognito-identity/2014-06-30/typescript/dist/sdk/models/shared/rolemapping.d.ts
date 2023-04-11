import { SpeakeasyBase } from "../../../internal/utils";
import { AmbiguousRoleResolutionTypeEnum } from "./ambiguousroleresolutiontypeenum";
import { RoleMappingTypeEnum } from "./rolemappingtypeenum";
import { RulesConfigurationType } from "./rulesconfigurationtype";
/**
 * A role mapping.
 */
export declare class RoleMapping extends SpeakeasyBase {
    ambiguousRoleResolution?: AmbiguousRoleResolutionTypeEnum;
    rulesConfiguration?: RulesConfigurationType;
    type: RoleMappingTypeEnum;
}
