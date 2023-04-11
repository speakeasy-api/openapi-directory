import { SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
import { QuerySuggestionsStatusEnum } from "./querysuggestionsstatusenum";
/**
 * Success
 */
export declare class DescribeQuerySuggestionsConfigResponse extends SpeakeasyBase {
    includeQueriesWithoutUserInformation?: boolean;
    lastClearTime?: Date;
    lastSuggestionsBuildTime?: Date;
    minimumNumberOfQueryingUsers?: number;
    minimumQueryCount?: number;
    mode?: ModeEnum;
    queryLogLookBackWindowInDays?: number;
    status?: QuerySuggestionsStatusEnum;
    totalSuggestionsCount?: number;
}
