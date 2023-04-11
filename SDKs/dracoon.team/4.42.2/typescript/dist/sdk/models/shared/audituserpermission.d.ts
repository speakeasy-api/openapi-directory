import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
/**
 * Audit user permissions report
 */
export declare class AuditUserPermission extends SpeakeasyBase {
    /**
     * Node permissions
     */
    permissions: NodePermissions;
    /**
     * User first name
     */
    userFirstName: string;
    /**
     * Unique identifier for the user
     */
    userId: number;
    /**
     * User last name
     */
    userLastName: string;
    /**
     * User login name
     */
    userLogin: string;
}
