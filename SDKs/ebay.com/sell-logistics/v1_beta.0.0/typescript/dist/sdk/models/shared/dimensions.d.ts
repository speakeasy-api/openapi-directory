import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type defines the dimensions of a package to be shipped.
 */
export declare class Dimensions extends SpeakeasyBase {
    /**
     * The numeric value of the height of the package.
     */
    height?: string;
    /**
     * The numeric value of the length of the package.
     */
    length?: string;
    /**
     * The unit of measure used to express the height, length, and width of the package. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a>
     */
    unit?: string;
    /**
     * The numeric value of the width of the package.
     */
    width?: string;
}
