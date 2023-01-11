import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQueryParams extends SpeakeasyBase {
    cid: number;
}
export declare class DeleteSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteRequest extends SpeakeasyBase {
    queryParams: DeleteQueryParams;
    security: DeleteSecurity;
}
export declare class DeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
