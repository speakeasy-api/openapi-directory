import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PepMonitorUpdateSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Pass new Webhook as post parameter
 */
export declare class PepMonitorUpdateRequestBody extends SpeakeasyBase {
    /**
     * If Monitoring is enabled this parameter is required. This is where updates will be sent to
     */
    webhook?: string;
}
export declare class PepMonitorUpdateRequest extends SpeakeasyBase {
    /**
     * Pass new Webhook as post parameter
     */
    requestBody?: PepMonitorUpdateRequestBody;
    /**
     * The identifier of the Monitor
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class PepMonitorUpdateDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * View a monitor for a Pep Sanction Report
 */
export declare class PepMonitorUpdate200ApplicationJSON extends SpeakeasyBase {
    active?: boolean;
    caseId?: string;
    created?: Date;
    identifier?: string;
    structured?: string;
    updated?: string;
    webhook?: string;
}
export declare class PepMonitorUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * View a monitor for a Pep Sanction Report
     */
    pepMonitorUpdate200ApplicationJSONObject?: PepMonitorUpdate200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    pepMonitorUpdateDefaultApplicationJSONObject?: PepMonitorUpdateDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
