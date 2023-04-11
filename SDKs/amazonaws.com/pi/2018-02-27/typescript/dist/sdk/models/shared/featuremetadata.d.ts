import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureStatusEnum } from "./featurestatusenum";
/**
 * The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
 */
export declare class FeatureMetadata extends SpeakeasyBase {
    status?: FeatureStatusEnum;
}
