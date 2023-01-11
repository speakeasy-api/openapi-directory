import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesCountQueryParams extends SpeakeasyBase {
    apiKey?: string;
    carType?: shared.ApiKeyEnum;
    cityState?: string;
    country?: shared.ApiKeyEnum1;
    make?: string;
    mm?: string;
    state?: string;
    taxonomyVin?: string;
    vin?: string;
    ymm?: string;
    ymmt?: string;
}
export declare class GetSalesCountRequest extends SpeakeasyBase {
    queryParams: GetSalesCountQueryParams;
}
export declare class GetSalesCountResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    sales?: shared.Sales;
    statusCode: number;
}
