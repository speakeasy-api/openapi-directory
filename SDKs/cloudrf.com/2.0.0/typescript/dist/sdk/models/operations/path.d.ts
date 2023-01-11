import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PathRequestBody extends SpeakeasyBase {
    antenna?: shared.Antenna;
    environment?: shared.Environment;
    model?: shared.Model;
    network?: string;
    output?: shared.Output;
    receiver?: shared.Receiver;
    site?: string;
    transmitter?: shared.Transmitter;
}
export declare class PathSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PathRequest extends SpeakeasyBase {
    request: PathRequestBody;
    security: PathSecurity;
}
export declare class PathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
