import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVehicleDetailsByRegistrationNumberRequest extends SpeakeasyBase {
    /**
     * Registration number of the vehicle to find details for
     */
    vehicleRequest: shared.VehicleRequest;
    /**
     * Consumer Correlation ID
     */
    xCorrelationId?: string;
    /**
     * Client Specific API Key
     */
    xApiKey: string;
}
export declare class GetVehicleDetailsByRegistrationNumberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    vehicle?: shared.Vehicle;
}
