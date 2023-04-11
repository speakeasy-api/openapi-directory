import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureParameter } from "./featureparameter";
export declare class UpdateFeatureMetadataRequest extends SpeakeasyBase {
    description?: string;
    featureGroupName: string;
    featureName: string;
    parameterAdditions?: FeatureParameter[];
    parameterRemovals?: string[];
}
