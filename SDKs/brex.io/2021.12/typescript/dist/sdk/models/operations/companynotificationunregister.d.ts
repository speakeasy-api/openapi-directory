import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyNotificationUnregisterSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyNotificationUnregisterRequest extends SpeakeasyBase {
    /**
     * Registration id of monitoring request record
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyNotificationUnregisterDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyNotificationUnregisterResponse extends SpeakeasyBase {
    /**
     * Detailed information about the error
     */
    companyNotificationUnregisterDefaultApplicationJSONObject?: CompanyNotificationUnregisterDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
