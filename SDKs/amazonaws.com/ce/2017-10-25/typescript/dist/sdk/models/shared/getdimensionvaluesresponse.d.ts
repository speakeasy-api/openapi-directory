import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValuesWithAttributes } from "./dimensionvalueswithattributes";
/**
 * Success
 */
export declare class GetDimensionValuesResponse extends SpeakeasyBase {
    dimensionValues: DimensionValuesWithAttributes[];
    nextPageToken?: string;
    returnSize: number;
    totalSize: number;
}
