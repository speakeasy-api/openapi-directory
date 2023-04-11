import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVehicleRequest extends SpeakeasyBase {
    /**
     * The vehicule id that needs to be fetched
     */
    id: string;
    /**
     * Populate driver
     */
    includeDriver?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate token
     */
    includeToken?: boolean;
}
export declare class GetVehicleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
