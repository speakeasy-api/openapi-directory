import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationItem } from "./recommendationitem";
import { TestRiskEnum } from "./testriskenum";
import { TestTypeEnum } from "./testtypeenum";
/**
 * Defines a test recommendation.
 */
export declare class TestRecommendation extends SpeakeasyBase {
    appComponentName?: string;
    dependsOnAlarms?: string[];
    description?: string;
    intent?: string;
    items?: RecommendationItem[];
    name?: string;
    prerequisite?: string;
    recommendationId?: string;
    referenceId: string;
    risk?: TestRiskEnum;
    type?: TestTypeEnum;
}
