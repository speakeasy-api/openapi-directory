import { SpeakeasyBase } from "../../../internal/utils";
import { Right } from "./right";
/**
 * Role information
 */
export declare class Role extends SpeakeasyBase {
    /**
     * Role description
     */
    description: string;
    /**
     * Unique identifier for the role
     */
    id: number;
    /**
     * List of reachable right over role
     */
    items?: Right[];
    /**
     * Role (unique) name
     */
    name: string;
}
