import { SpeakeasyBase } from "../../../internal/utils";
import { HeavyEquipmentsBaseListing } from "./heavyequipmentsbaselisting";
/**
 * Heavy Equipments search query response
**/
export declare class HeavyEquipmentsSearchResponse extends SpeakeasyBase {
    facets?: Record<string, any>;
    listings?: HeavyEquipmentsBaseListing[];
    numFound?: number;
    rangeFacets?: Record<string, any>;
    stats?: Record<string, any>;
}
