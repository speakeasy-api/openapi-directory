import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    healthCheckRead?: shared.HealthCheckRead;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
