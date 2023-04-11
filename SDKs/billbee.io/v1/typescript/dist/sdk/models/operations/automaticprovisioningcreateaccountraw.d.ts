import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutomaticProvisioningCreateAccountRawResponse extends SpeakeasyBase {
    /**
     * OK
     */
    automaticProvisioningCreateAccountRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    automaticProvisioningCreateAccountRaw200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
