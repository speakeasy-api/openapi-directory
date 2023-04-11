import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionDetail } from "./dimensiondetail";
/**
 * Information about dimensions within a dimension group.
 */
export declare class DimensionGroupDetail extends SpeakeasyBase {
    dimensions?: DimensionDetail[];
    group?: string;
}
