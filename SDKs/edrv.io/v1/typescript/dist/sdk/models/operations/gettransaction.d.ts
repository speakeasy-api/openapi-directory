import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTransactionRequest extends SpeakeasyBase {
    /**
     * The transaction id that needs to be fetched
     */
    id: string;
    /**
     * Populate chargestation
     */
    includeChargestation?: boolean;
    /**
     * Populate connector
     */
    includeConnector?: boolean;
    /**
     * Populate driver
     */
    includeDriver?: boolean;
    /**
     * Populate evse
     */
    includeEvse?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate rate
     */
    includeRate?: boolean;
    /**
     * Populate reservation
     */
    includeReservation?: boolean;
    /**
     * Populate token
     */
    includeToken?: boolean;
}
export declare class GetTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
