import { SpeakeasyBase } from "../../../internal/utils";
import { Parent } from "./parent";
/**
 * Logical representation of a Field with a name.  Spatial attributes of the Field are provided in the Boundary.
 */
export declare class Field extends SpeakeasyBase {
    /**
     * Unique identifier for the current Field's Boundary.
     */
    boundaryId: string;
    /**
     * Unique identifier for a Field.
     */
    id: string;
    /**
     * Name of the Field.
     */
    name: string;
    /**
     * A minimal set of attributes regarding the parent of a farm organization.
     */
    parent: Parent;
    /**
     * Unique identifier of the resource owner that owns the Field.
     */
    resourceOwnerId: string;
}
