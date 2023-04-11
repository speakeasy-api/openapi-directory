import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class AsanaResource extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
