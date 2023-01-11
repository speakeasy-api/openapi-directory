import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddClutterRequestBody extends SpeakeasyBase {
    features?: shared.Feature[];
    name?: string;
    type?: string;
}
export declare class AddClutterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddClutterRequest extends SpeakeasyBase {
    request: AddClutterRequestBody;
    security: AddClutterSecurity;
}
export declare class AddClutterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
