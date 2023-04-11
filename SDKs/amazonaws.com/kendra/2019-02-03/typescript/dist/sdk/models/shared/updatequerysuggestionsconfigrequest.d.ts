import { SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
export declare class UpdateQuerySuggestionsConfigRequest extends SpeakeasyBase {
    includeQueriesWithoutUserInformation?: boolean;
    indexId: string;
    minimumNumberOfQueryingUsers?: number;
    minimumQueryCount?: number;
    mode?: ModeEnum;
    queryLogLookBackWindowInDays?: number;
}
