import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateRoleRequest extends SpeakeasyBase {
    assumeRolePolicyDocument: string;
    description?: string;
    maxSessionDuration?: number;
    path?: string;
    permissionsBoundary?: string;
    roleName: string;
    tags?: Tag[];
}
