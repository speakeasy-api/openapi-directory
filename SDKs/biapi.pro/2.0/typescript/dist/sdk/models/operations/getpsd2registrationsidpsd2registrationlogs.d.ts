import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPsd2RegistrationsIdPsd2registrationLogsRequest extends SpeakeasyBase {
    expand?: string;
    idPsd2registration: number;
    /**
     * limit number of results
     */
    limit?: number;
    /**
     * maximum (inclusive) date
     */
    maxDate?: Date;
    /**
     * minimal (inclusive) date
     */
    minDate?: Date;
    /**
     * offset of first result
     */
    offset?: number;
}
/**
 * psd2registrationlogs
 */
export declare class GetPsd2RegistrationsIdPsd2registrationLogs200ApplicationJSON extends SpeakeasyBase {
    psd2registrationlogs: shared.Psd2RegistrationLog[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetPsd2RegistrationsIdPsd2registrationLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * psd2registrationlogs
     */
    getPsd2RegistrationsIdPsd2registrationLogs200ApplicationJSONObject?: GetPsd2RegistrationsIdPsd2registrationLogs200ApplicationJSON;
}
