import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyNotificationRegisterSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Callback URL where the notifications will be sent to
 */
export declare class CompanyNotificationRegisterRequestBody extends SpeakeasyBase {
    /**
     * Callback URL
     */
    callbackUrl: string;
}
export declare class CompanyNotificationRegisterRequest extends SpeakeasyBase {
    /**
     * Callback URL where the notifications will be sent to
     */
    requestBody?: CompanyNotificationRegisterRequestBody;
    /**
     * Company Hex ID
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyNotificationRegisterDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Successful webhook registration response
 */
export declare class CompanyNotificationRegister200ApplicationJSON extends SpeakeasyBase {
    monitorStatus: string;
    notificationId: string;
}
export declare class CompanyNotificationRegisterResponse extends SpeakeasyBase {
    /**
     * Successful webhook registration response
     */
    companyNotificationRegister200ApplicationJSONObject?: CompanyNotificationRegister200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    companyNotificationRegisterDefaultApplicationJSONObject?: CompanyNotificationRegisterDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
