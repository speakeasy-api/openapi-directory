import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PepMonitorUnregisterSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class PepMonitorUnregisterRequest extends SpeakeasyBase {
    /**
     * The identifier of the Monitor
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class PepMonitorUnregisterDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * View a monitor for a Pep Sanction Report
 */
export declare class PepMonitorUnregister200ApplicationJSON extends SpeakeasyBase {
    active?: boolean;
    caseId?: string;
    created?: Date;
    identifier?: string;
    structured?: string;
    updated?: string;
    webhook?: string;
}
export declare class PepMonitorUnregisterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * View a monitor for a Pep Sanction Report
     */
    pepMonitorUnregister200ApplicationJSONObject?: PepMonitorUnregister200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    pepMonitorUnregisterDefaultApplicationJSONObject?: PepMonitorUnregisterDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
