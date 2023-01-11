import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchMotorcycleAutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodyType?: string;
    city?: string;
    color?: string;
    drivetrain?: string;
    engine?: string;
    field: shared.ApiKeyEnum5;
    fuelType?: string;
    ignoreCase?: boolean;
    input: string;
    inventoryType?: shared.InventoryTypeEnum;
    make?: string;
    model?: string;
    sortBy?: shared.InventoryTypeEnum1;
    state?: string;
    termCounts?: boolean;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetSearchMotorcycleAutoCompleteRequest extends SpeakeasyBase {
    queryParams: GetSearchMotorcycleAutoCompleteQueryParams;
}
export declare class GetSearchMotorcycleAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
}
