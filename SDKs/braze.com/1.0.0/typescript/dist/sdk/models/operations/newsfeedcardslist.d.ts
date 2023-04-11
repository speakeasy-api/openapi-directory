import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NewsFeedCardsListRequest extends SpeakeasyBase {
    /**
     * (Optional) Boolean
     *
     * @remarks
     *
     * Whether or not to include archived cards, defaults to false
     */
    includeArchived?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * The page of cards to return, defaults to 0 (returns the first set of up to 100)
     */
    page?: string;
    /**
     * (Optional) String
     *
     * @remarks
     *
     * Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.
     */
    sortDirection?: string;
}
export declare class NewsFeedCardsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
