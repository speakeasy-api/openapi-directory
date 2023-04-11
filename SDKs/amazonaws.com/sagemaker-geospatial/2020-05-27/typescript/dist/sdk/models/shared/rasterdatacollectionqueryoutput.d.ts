import { SpeakeasyBase } from "../../../internal/utils";
import { AreaOfInterest } from "./areaofinterest";
import { PropertyFilters } from "./propertyfilters";
import { TimeRangeFilterInput } from "./timerangefilterinput";
/**
 * <p/>
 */
export declare class RasterDataCollectionQueryOutput extends SpeakeasyBase {
    areaOfInterest?: AreaOfInterest;
    propertyFilters?: PropertyFilters;
    rasterDataCollectionArn: string;
    rasterDataCollectionName: string;
    timeRangeFilter: TimeRangeFilterInput;
}
