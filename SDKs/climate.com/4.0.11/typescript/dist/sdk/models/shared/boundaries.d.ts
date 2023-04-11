import { SpeakeasyBase } from "../../../internal/utils";
import { Boundary } from "./boundary";
export declare enum BoundariesTypeEnum {
    FeatureCollection = "FeatureCollection"
}
/**
 * A batch of boundary results
 */
export declare class Boundaries extends SpeakeasyBase {
    features: Boundary[];
    type: BoundariesTypeEnum;
}
