import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class AsanaNamedResource extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the object.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
