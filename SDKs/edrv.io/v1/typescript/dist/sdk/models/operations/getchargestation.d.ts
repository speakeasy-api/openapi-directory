import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChargeStationRequest extends SpeakeasyBase {
    /**
     * The charge station id that needs to be fetched
     */
    id: string;
    /**
     * Populate evses
     */
    includeEvses?: boolean;
    /**
     * Populate location
     */
    includeLocation?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
}
export declare class GetChargeStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
