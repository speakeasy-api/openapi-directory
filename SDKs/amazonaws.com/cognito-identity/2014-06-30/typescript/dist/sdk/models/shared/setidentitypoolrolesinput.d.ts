import { SpeakeasyBase } from "../../../internal/utils";
import { RoleMapping } from "./rolemapping";
/**
 * Input to the <code>SetIdentityPoolRoles</code> action.
 */
export declare class SetIdentityPoolRolesInput extends SpeakeasyBase {
    identityPoolId: string;
    roleMappings?: Record<string, RoleMapping>;
    roles: Record<string, string>;
}
