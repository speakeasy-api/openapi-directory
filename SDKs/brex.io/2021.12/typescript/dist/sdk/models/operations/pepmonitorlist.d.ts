import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class PepMonitorListDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class PepMonitorList200ApplicationJSON extends SpeakeasyBase {
    active?: boolean;
    caseId?: string;
    created?: Date;
    identifier?: string;
    structured?: string;
    updated?: string;
    webhook?: string;
}
export declare class PepMonitorListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * View Pep Sanction Report monitors
     */
    pepMonitorList200ApplicationJSONObjects?: PepMonitorList200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    pepMonitorListDefaultApplicationJSONObject?: PepMonitorListDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
