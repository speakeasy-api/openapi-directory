import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.
 */
export declare enum AppsListAccountsForPlanDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class AppsListAccountsForPlanRequest extends SpeakeasyBase {
    /**
     * To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.
     */
    direction?: AppsListAccountsForPlanDirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The unique identifier of the plan.
     */
    planId: number;
    /**
     * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
     */
    sort?: shared.SortEnum;
}
export declare class AppsListAccountsForPlanResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    marketplacePurchases?: shared.MarketplacePurchase[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
