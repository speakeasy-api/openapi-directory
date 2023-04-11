import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class CompanyMonitorListDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyMonitorList200ApplicationJSON extends SpeakeasyBase {
    callbackCount?: number;
    callbackUrl?: string;
    created?: Date;
    monitorStatus?: string;
    notificationId?: string;
    subjectId?: string;
}
export declare class CompanyMonitorListResponse extends SpeakeasyBase {
    /**
     * List of monitor webhooks
     */
    companyMonitorList200ApplicationJSONObjects?: CompanyMonitorList200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyMonitorListDefaultApplicationJSONObject?: CompanyMonitorListDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
