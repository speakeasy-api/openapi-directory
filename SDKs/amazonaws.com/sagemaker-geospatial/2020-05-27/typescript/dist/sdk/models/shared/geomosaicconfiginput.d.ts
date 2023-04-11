import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmNameGeoMosaicEnum } from "./algorithmnamegeomosaicenum";
/**
 * Input configuration information for the geomosaic.
 */
export declare class GeoMosaicConfigInput extends SpeakeasyBase {
    algorithmName?: AlgorithmNameGeoMosaicEnum;
    targetBands?: string[];
}
