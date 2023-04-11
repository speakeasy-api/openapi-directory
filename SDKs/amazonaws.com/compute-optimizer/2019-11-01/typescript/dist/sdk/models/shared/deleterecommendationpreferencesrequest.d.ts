import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationPreferenceNameEnum } from "./recommendationpreferencenameenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Scope } from "./scope";
export declare class DeleteRecommendationPreferencesRequest extends SpeakeasyBase {
    recommendationPreferenceNames: RecommendationPreferenceNameEnum[];
    resourceType: ResourceTypeEnum;
    scope?: Scope;
}
