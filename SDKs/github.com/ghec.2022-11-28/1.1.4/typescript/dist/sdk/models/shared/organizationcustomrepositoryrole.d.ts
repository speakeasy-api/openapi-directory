import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
/**
 * The system role from which this role inherits permissions.
 */
export declare enum OrganizationCustomRepositoryRoleBaseRoleEnum {
    Read = "read",
    Triage = "triage",
    Write = "write",
    Maintain = "maintain"
}
/**
 * Custom repository roles created by organization administrators
 */
export declare class OrganizationCustomRepositoryRole extends SpeakeasyBase {
    /**
     * The system role from which this role inherits permissions.
     */
    baseRole?: OrganizationCustomRepositoryRoleBaseRoleEnum;
    createdAt?: Date;
    /**
     * A short description about who this role is for or what permissions it grants.
     */
    description?: string;
    /**
     * The unique identifier of the custom role.
     */
    id: number;
    /**
     * The name of the custom role.
     */
    name: string;
    /**
     * A GitHub user.
     */
    organization?: SimpleUser;
    /**
     * A list of additional permissions included in this role.
     */
    permissions?: string[];
    updatedAt?: Date;
}
