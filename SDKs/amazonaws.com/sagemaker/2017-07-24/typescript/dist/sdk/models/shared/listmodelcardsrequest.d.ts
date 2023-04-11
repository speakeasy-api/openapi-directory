import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardSortByEnum } from "./modelcardsortbyenum";
import { ModelCardSortOrderEnum } from "./modelcardsortorderenum";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
export declare class ListModelCardsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    modelCardStatus?: ModelCardStatusEnum;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ModelCardSortByEnum;
    sortOrder?: ModelCardSortOrderEnum;
}
