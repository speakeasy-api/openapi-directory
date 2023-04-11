import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChargeStationConnectorsRequest extends SpeakeasyBase {
    /**
     * chargeStation id
     */
    id: string;
    /**
     * Populate evse
     */
    includeEvse?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
}
export declare class GetChargeStationConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
