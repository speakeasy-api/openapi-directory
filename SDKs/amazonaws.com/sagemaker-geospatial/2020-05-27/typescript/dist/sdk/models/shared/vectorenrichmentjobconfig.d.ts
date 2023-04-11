import { SpeakeasyBase } from "../../../internal/utils";
import { MapMatchingConfig } from "./mapmatchingconfig";
import { ReverseGeocodingConfig } from "./reversegeocodingconfig";
/**
 * It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.
 */
export declare class VectorEnrichmentJobConfig extends SpeakeasyBase {
    mapMatchingConfig?: MapMatchingConfig;
    reverseGeocodingConfig?: ReverseGeocodingConfig;
}
