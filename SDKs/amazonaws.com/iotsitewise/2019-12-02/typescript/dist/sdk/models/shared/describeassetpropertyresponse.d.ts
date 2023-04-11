import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeModelProperty } from "./compositemodelproperty";
import { Property } from "./property";
/**
 * Success
 */
export declare class DescribeAssetPropertyResponse extends SpeakeasyBase {
    assetId: string;
    assetModelId: string;
    assetName: string;
    assetProperty?: Property;
    compositeModel?: CompositeModelProperty;
}
