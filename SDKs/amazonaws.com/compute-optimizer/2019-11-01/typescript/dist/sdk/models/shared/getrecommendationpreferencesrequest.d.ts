import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Scope } from "./scope";
export declare class GetRecommendationPreferencesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceType: ResourceTypeEnum;
    scope?: Scope;
}
