import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureMetadata } from "./featuremetadata";
/**
 * Success
 */
export declare class GetResourceMetadataResponse extends SpeakeasyBase {
    features?: Record<string, FeatureMetadata>;
    identifier?: string;
}
