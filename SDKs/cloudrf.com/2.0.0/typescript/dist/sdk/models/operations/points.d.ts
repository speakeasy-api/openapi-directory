import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PointsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
/**
 * A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.
 */
export declare class PointsRequestBody extends SpeakeasyBase {
    antenna?: shared.Antenna;
    environment?: shared.Environment;
    model?: shared.Model;
    /**
     * Network name/group
     */
    network?: string;
    output?: shared.Output;
    points?: shared.Point[];
    receiver?: shared.Receiver;
    /**
     * Site name
     */
    site?: string;
    transmitter?: shared.Transmitter;
}
export declare class PointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
