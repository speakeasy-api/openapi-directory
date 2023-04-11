import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValuesWithAttributes } from "./dimensionvalueswithattributes";
import { GroupDefinition } from "./groupdefinition";
import { ResultByTime } from "./resultbytime";
/**
 * Success
 */
export declare class GetCostAndUsageResponse extends SpeakeasyBase {
    dimensionValueAttributes?: DimensionValuesWithAttributes[];
    groupDefinitions?: GroupDefinition[];
    nextPageToken?: string;
    resultsByTime?: ResultByTime[];
}
