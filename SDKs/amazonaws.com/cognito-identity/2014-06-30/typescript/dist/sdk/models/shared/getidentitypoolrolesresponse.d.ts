import { SpeakeasyBase } from "../../../internal/utils";
import { RoleMapping } from "./rolemapping";
/**
 * Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
 */
export declare class GetIdentityPoolRolesResponse extends SpeakeasyBase {
    identityPoolId?: string;
    roleMappings?: Record<string, RoleMapping>;
    roles?: Record<string, string>;
}
