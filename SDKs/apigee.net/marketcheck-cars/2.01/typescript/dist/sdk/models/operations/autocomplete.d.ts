import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodySubtype?: string;
    bodyType?: string;
    carType?: shared.CarTypeEnum;
    city?: string;
    country?: shared.CountryEnum;
    drivetrain?: string;
    engine?: string;
    engineBlock?: string;
    engineSize?: string;
    exteriorColor?: string;
    field: shared.ApiKeyEnum2;
    fuelType?: string;
    ignoreCase?: boolean;
    includeNonVinListings?: shared.CarTypeEnum1;
    input: string;
    interiorColor?: string;
    make?: string;
    model?: string;
    sortBy?: shared.CarTypeEnum2;
    state?: string;
    termCounts?: boolean;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class AutoCompleteRequest extends SpeakeasyBase {
    queryParams: AutoCompleteQueryParams;
}
export declare class AutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
}
