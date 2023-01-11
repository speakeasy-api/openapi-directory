import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StatusSkuApiV1StatusSkuGetQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class StatusSkuApiV1StatusSkuGetRequest extends SpeakeasyBase {
    queryParams: StatusSkuApiV1StatusSkuGetQueryParams;
}
export declare class StatusSkuApiV1StatusSkuGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCall?: shared.StatusCall;
    statusCode: number;
}
