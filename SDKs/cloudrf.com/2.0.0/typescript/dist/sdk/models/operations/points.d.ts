import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PointsRequestBody extends SpeakeasyBase {
    antenna?: shared.Antenna;
    environment?: shared.Environment;
    model?: shared.Model;
    network?: string;
    output?: shared.Output;
    points?: shared.Point[];
    receiver?: shared.Receiver;
    site?: string;
    transmitter?: shared.Transmitter;
}
export declare class PointsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PointsRequest extends SpeakeasyBase {
    request: PointsRequestBody;
    security: PointsSecurity;
}
export declare class PointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
