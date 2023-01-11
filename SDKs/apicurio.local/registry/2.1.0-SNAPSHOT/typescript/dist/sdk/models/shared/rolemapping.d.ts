import { SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";
/**
 * The mapping between a user/principal and their role.
**/
export declare class RoleMapping extends SpeakeasyBase {
    principalId: string;
    role: RoleTypeEnum;
}
