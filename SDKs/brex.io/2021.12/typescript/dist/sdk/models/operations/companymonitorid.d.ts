import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyMonitorIdSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyMonitorIdRequest extends SpeakeasyBase {
    /**
     * Company Hex ID
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyMonitorIdDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyMonitorId200ApplicationJSON extends SpeakeasyBase {
    callbackCount?: number;
    callbackUrl?: string;
    created?: Date;
    monitorStatus?: string;
    notificationId?: string;
    subjectId?: string;
}
export declare class CompanyMonitorIdResponse extends SpeakeasyBase {
    /**
     * List of monitor webhooks
     */
    companyMonitorId200ApplicationJSONObjects?: CompanyMonitorId200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyMonitorIdDefaultApplicationJSONObject?: CompanyMonitorIdDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
