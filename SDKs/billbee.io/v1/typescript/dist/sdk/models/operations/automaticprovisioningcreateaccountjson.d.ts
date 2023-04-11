import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutomaticProvisioningCreateAccountJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    automaticProvisioningCreateAccountJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    automaticProvisioningCreateAccountJSON200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
