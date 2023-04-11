import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class CompanyNotificationListDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyNotificationList200ApplicationJSON extends SpeakeasyBase {
    callbackCount?: number;
    callbackUrl?: string;
    created?: Date;
    monitorStatus?: string;
    notificationId?: string;
    subjectId?: string;
}
export declare class CompanyNotificationListResponse extends SpeakeasyBase {
    /**
     * List of monitor webhooks
     */
    companyNotificationList200ApplicationJSONObjects?: CompanyNotificationList200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyNotificationListDefaultApplicationJSONObject?: CompanyNotificationListDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
