import { SpeakeasyBase } from "../../../internal/utils";
export declare class SortOptionResponseSortOptions extends SpeakeasyBase {
    order?: number;
    sortName?: string;
    strategy?: string;
}
export declare class SortOptionResponse extends SpeakeasyBase {
    responseMessage?: string;
    responseStatus?: string;
    resultSize?: number;
    sortOptions?: SortOptionResponseSortOptions[];
}
