import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyMonitorUnregisterSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyMonitorUnregisterRequest extends SpeakeasyBase {
    /**
     * Registration id of monitoring request record
     */
    id: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyMonitorUnregisterDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyMonitorUnregisterResponse extends SpeakeasyBase {
    /**
     * Detailed information about the error
     */
    companyMonitorUnregisterDefaultApplicationJSONObject?: CompanyMonitorUnregisterDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
