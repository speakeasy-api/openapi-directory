import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InterferenceQueryParams extends SpeakeasyBase {
    name: string;
    network: string;
}
export declare class InterferenceSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class InterferenceRequest extends SpeakeasyBase {
    queryParams: InterferenceQueryParams;
    security: InterferenceSecurity;
}
export declare class InterferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
