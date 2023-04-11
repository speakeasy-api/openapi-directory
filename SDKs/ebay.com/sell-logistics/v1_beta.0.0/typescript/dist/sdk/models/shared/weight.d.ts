import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type contains information about the weight of an object such as a shipping package.
 */
export declare class Weight extends SpeakeasyBase {
    /**
     * The unit of measurement used to specify the weight of a shipping package. Both the <strong>unit</strong> and <strong>value</strong> fields are required if the <strong>weight</strong> container is used. If the English system of measurement is being used, the applicable values for weight units are <code>POUND</code> and <code>OUNCE</CODE>. If the metric system of measurement is being used, the applicable values for weight units are <code>KILOGRAM</code> and <code>GRAM</code>. The metric system is used by most countries outside of the US. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a>
     */
    unit?: string;
    /**
     * The numeric value of the weight of the package, as measured by the value of <b>unit</b>.
     */
    value?: string;
}
