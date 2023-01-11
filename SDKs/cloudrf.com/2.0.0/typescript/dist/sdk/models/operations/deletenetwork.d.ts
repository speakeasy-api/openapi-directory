import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNetworkQueryParams extends SpeakeasyBase {
    nid: string;
}
export declare class DeleteNetworkSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteNetworkRequest extends SpeakeasyBase {
    queryParams: DeleteNetworkQueryParams;
    security: DeleteNetworkSecurity;
}
export declare class DeleteNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
