import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardSortOrderEnum } from "./modelcardsortorderenum";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
import { ModelCardVersionSortByEnum } from "./modelcardversionsortbyenum";
export declare class ListModelCardVersionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    modelCardName: string;
    modelCardStatus?: ModelCardStatusEnum;
    nextToken?: string;
    sortBy?: ModelCardVersionSortByEnum;
    sortOrder?: ModelCardSortOrderEnum;
}
