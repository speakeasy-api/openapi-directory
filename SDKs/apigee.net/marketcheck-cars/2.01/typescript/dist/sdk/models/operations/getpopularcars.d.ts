import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPopularCarsQueryParams extends SpeakeasyBase {
    apiKey?: string;
    carType: shared.ApiKeyEnum;
    cityState?: string;
    country?: shared.ApiKeyEnum1;
    state?: string;
}
export declare class GetPopularCarsRequest extends SpeakeasyBase {
    queryParams: GetPopularCarsQueryParams;
}
export declare class GetPopularCarsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    popularCars?: shared.PopularCars;
    statusCode: number;
}
