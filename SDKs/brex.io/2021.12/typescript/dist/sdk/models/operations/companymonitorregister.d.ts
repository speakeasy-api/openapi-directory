import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyMonitorRegisterSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Callback URL where the notifications will be sent to
 */
export declare class CompanyMonitorRegisterRequestBody extends SpeakeasyBase {
    /**
     * Callback URL
     */
    callbackUrl: string;
    /**
     * ChangeType to monitor
     */
    changeType: string;
}
export declare class CompanyMonitorRegisterRequest extends SpeakeasyBase {
    /**
     * Callback URL where the notifications will be sent to
     */
    requestBody?: CompanyMonitorRegisterRequestBody;
    /**
     * Company Hex ID
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyMonitorRegisterDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Successful webhook registration response
 */
export declare class CompanyMonitorRegister200ApplicationJSON extends SpeakeasyBase {
    monitorStatus: string;
    notificationId: string;
}
export declare class CompanyMonitorRegisterResponse extends SpeakeasyBase {
    /**
     * Successful webhook registration response
     */
    companyMonitorRegister200ApplicationJSONObject?: CompanyMonitorRegister200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    companyMonitorRegisterDefaultApplicationJSONObject?: CompanyMonitorRegisterDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
