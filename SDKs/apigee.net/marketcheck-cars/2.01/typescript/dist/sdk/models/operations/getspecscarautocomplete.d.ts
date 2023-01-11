import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpecsCarAutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodySubtype?: string;
    bodyType?: string;
    drivetrain?: string;
    engine?: string;
    engineBlock?: string;
    engineSize?: string;
    field: shared.ApiKeyEnum7;
    fuelType?: string;
    ignoreCase?: boolean;
    input: string;
    make?: string;
    model?: string;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetSpecsCarAutoCompleteRequest extends SpeakeasyBase {
    queryParams: GetSpecsCarAutoCompleteQueryParams;
}
export declare class GetSpecsCarAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    specsAutoCompleteResponse?: shared.SpecsAutoCompleteResponse;
    statusCode: number;
}
