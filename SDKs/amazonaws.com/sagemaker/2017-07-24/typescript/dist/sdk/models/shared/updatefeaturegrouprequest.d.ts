import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
export declare class UpdateFeatureGroupRequest extends SpeakeasyBase {
    featureAdditions?: FeatureDefinition[];
    featureGroupName: string;
}
