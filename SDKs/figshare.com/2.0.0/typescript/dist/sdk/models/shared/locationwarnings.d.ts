import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class LocationWarnings extends SpeakeasyBase {
    /**
     * Figshare ID of the entity
     */
    entityId: number;
    /**
     * Url for entity
     */
    location: string;
    /**
     * Issues encountered during the operation
     */
    warnings: string[];
}
