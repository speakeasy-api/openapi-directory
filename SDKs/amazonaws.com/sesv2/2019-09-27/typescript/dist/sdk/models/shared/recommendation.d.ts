import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationImpactEnum } from "./recommendationimpactenum";
import { RecommendationStatusEnum } from "./recommendationstatusenum";
import { RecommendationTypeEnum } from "./recommendationtypeenum";
/**
 * A recommendation generated for your account.
 */
export declare class Recommendation extends SpeakeasyBase {
    createdTimestamp?: Date;
    description?: string;
    impact?: RecommendationImpactEnum;
    lastUpdatedTimestamp?: Date;
    resourceArn?: string;
    status?: RecommendationStatusEnum;
    type?: RecommendationTypeEnum;
}
