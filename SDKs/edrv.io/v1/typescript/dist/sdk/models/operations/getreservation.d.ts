import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReservationRequest extends SpeakeasyBase {
    /**
     * ID of the reservation that needs to be fetched
     */
    id: string;
    /**
     * Populate chargestation
     */
    includeChargestation?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
}
export declare class GetReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
