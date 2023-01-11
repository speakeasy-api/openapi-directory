import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListAccountsForPlanPathParams extends SpeakeasyBase {
    planId: number;
}
export declare class AppsListAccountsForPlanQueryParams extends SpeakeasyBase {
    direction?: shared.SortEnum1;
    page?: number;
    perPage?: number;
    sort?: shared.SortEnum;
}
export declare class AppsListAccountsForPlanRequest extends SpeakeasyBase {
    pathParams: AppsListAccountsForPlanPathParams;
    queryParams: AppsListAccountsForPlanQueryParams;
}
export declare class AppsListAccountsForPlanResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    marketplacePurchases?: shared.MarketplacePurchase[];
    validationError?: shared.ValidationError;
}
