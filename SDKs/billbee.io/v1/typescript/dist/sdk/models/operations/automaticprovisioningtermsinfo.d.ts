import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutomaticProvisioningTermsInfoResponse extends SpeakeasyBase {
    /**
     * OK
     */
    automaticProvisioningTermsInfo200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    automaticProvisioningTermsInfo200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
