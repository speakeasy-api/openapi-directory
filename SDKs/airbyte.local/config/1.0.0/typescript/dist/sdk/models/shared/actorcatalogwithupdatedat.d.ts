import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A source actor catalog with the timestamp it was mostly recently updated
 */
export declare class ActorCatalogWithUpdatedAt extends SpeakeasyBase {
    catalog?: Record<string, any>;
    updatedAt?: number;
}
