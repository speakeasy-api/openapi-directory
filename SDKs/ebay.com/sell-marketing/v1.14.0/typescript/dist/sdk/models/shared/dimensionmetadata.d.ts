import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionKeyAnnotation } from "./dimensionkeyannotation";
/**
 * This type defines the dimension used to create the report and the annotation keys associated with that dimension.
 */
export declare class DimensionMetadata extends SpeakeasyBase {
    /**
     * The data type of the dimension value used to create the report. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>
     */
    dataType?: string;
    /**
     * The name of the dimension used to create the report.
     */
    dimensionKey?: string;
    /**
     * An list of annotation keys associated with the specified dimension of the report.
     */
    dimensionKeyAnnotations?: DimensionKeyAnnotation[];
}
