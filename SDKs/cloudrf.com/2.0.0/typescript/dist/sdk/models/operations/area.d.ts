import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AreaSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
/**
 * A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.
 */
export declare class AreaRequestBody extends SpeakeasyBase {
    antenna?: shared.Antenna;
    environment?: shared.Environment;
    model?: shared.Model;
    /**
     * Network name/group
     */
    network?: string;
    output?: shared.Output;
    receiver?: shared.Receiver;
    /**
     * Site name
     */
    site?: string;
    transmitter?: shared.Transmitter;
}
export declare class AreaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
