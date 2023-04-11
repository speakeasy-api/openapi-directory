import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { SortTrialComponentsByEnum } from "./sorttrialcomponentsbyenum";
export declare class ListTrialComponentsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    experimentName?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortTrialComponentsByEnum;
    sortOrder?: SortOrderEnum;
    sourceArn?: string;
    trialName?: string;
}
