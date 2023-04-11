import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be <code>listing_title</code> or <code>listing_quantity_sold</code>.
 */
export declare class DimensionKeyAnnotation extends SpeakeasyBase {
    /**
     * An annotation key associated with the dimension.
     */
    annotationKey?: string;
    /**
     * The data type of the annotation key value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>
     */
    dataType?: string;
}
