import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyNotificationIdSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyNotificationIdRequest extends SpeakeasyBase {
    /**
     * Company Hex ID
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyNotificationIdDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyNotificationId200ApplicationJSON extends SpeakeasyBase {
    callbackCount?: number;
    callbackUrl?: string;
    created?: Date;
    monitorStatus?: string;
    notificationId?: string;
    subjectId?: string;
}
export declare class CompanyNotificationIdResponse extends SpeakeasyBase {
    /**
     * List of monitor webhooks
     */
    companyNotificationId200ApplicationJSONObjects?: CompanyNotificationId200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyNotificationIdDefaultApplicationJSONObject?: CompanyNotificationIdDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
