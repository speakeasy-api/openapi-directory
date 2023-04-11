import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutomaticProvisioningCreateAccountFormResponse extends SpeakeasyBase {
    /**
     * OK
     */
    automaticProvisioningCreateAccountForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    automaticProvisioningCreateAccountForm200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
