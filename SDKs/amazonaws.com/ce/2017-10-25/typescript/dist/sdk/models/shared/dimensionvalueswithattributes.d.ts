import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
 */
export declare class DimensionValuesWithAttributes extends SpeakeasyBase {
    attributes?: Record<string, string>;
    value?: string;
}
