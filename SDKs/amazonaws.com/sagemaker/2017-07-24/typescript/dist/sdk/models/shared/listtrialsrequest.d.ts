import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { SortTrialsByEnum } from "./sorttrialsbyenum";
export declare class ListTrialsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    experimentName?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortTrialsByEnum;
    sortOrder?: SortOrderEnum;
    trialComponentName?: string;
}
