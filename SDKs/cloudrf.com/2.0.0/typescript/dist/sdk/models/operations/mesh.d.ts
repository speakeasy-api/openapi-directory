import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeshQueryParams extends SpeakeasyBase {
    name: string;
    network: string;
}
export declare class MeshSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class MeshRequest extends SpeakeasyBase {
    queryParams: MeshQueryParams;
    security: MeshSecurity;
}
export declare class MeshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
