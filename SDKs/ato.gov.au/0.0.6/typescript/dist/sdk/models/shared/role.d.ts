import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Role Type resource.
 */
export declare class Role extends SpeakeasyBase {
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The reciprocal role name.
     */
    reciprocalRole?: string;
    /**
     * The reciprocal role description.
     */
    reciprocalRoleDescription?: string;
    /**
     * The relationship name.
     */
    relationship?: string;
    /**
     * The role name.
     */
    role?: string;
    /**
     * The role description.
     */
    roleDescription?: string;
}
