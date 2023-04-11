import { SpeakeasyBase } from "../../../internal/utils";
import { RoleEnum } from "./roleenum";
import { User } from "./user";
/**
 * A structure containing the identity of one user or group and the <code>Admin</code>, <code>Editor</code>, or <code>Viewer</code> role that they have.
 */
export declare class PermissionEntry extends SpeakeasyBase {
    role: RoleEnum;
    user: User;
}
