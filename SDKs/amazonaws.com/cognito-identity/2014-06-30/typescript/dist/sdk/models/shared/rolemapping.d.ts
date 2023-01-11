import { SpeakeasyBase } from "../../../internal/utils";
import { AmbiguousRoleResolutionTypeEnum } from "./ambiguousroleresolutiontypeenum";
import { RulesConfigurationType } from "./rulesconfigurationtype";
import { RoleMappingTypeEnum } from "./rolemappingtypeenum";
export declare class RoleMapping extends SpeakeasyBase {
    ambiguousRoleResolution?: AmbiguousRoleResolutionTypeEnum;
    rulesConfiguration?: RulesConfigurationType;
    type?: RoleMappingTypeEnum;
}
