import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListQueryParams extends SpeakeasyBase {
    e?: number;
    n?: number;
    s?: number;
    w?: number;
}
export declare class ListSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListRequest extends SpeakeasyBase {
    queryParams: ListQueryParams;
    security: ListSecurity;
}
export declare class ListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
