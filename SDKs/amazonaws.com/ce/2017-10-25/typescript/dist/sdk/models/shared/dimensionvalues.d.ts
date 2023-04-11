import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionEnum } from "./dimensionenum";
import { MatchOptionEnum } from "./matchoptionenum";
/**
 * The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
 */
export declare class DimensionValues extends SpeakeasyBase {
    key?: DimensionEnum;
    matchOptions?: MatchOptionEnum[];
    values?: string[];
}
