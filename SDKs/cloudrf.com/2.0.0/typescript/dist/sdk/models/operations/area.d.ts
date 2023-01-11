import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AreaRequestBody extends SpeakeasyBase {
    antenna?: shared.Antenna;
    environment?: shared.Environment;
    model?: shared.Model;
    network?: string;
    output?: shared.Output;
    receiver?: shared.Receiver;
    site?: string;
    transmitter?: shared.Transmitter;
}
export declare class AreaSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AreaRequest extends SpeakeasyBase {
    request: AreaRequestBody;
    security: AreaSecurity;
}
export declare class AreaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
