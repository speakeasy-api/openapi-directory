import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StatusCallApiV1StatusCallGetQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class StatusCallApiV1StatusCallGetRequest extends SpeakeasyBase {
    queryParams: StatusCallApiV1StatusCallGetQueryParams;
}
export declare class StatusCallApiV1StatusCallGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCall?: shared.StatusCall;
    statusCode: number;
}
