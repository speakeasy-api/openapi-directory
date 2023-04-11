import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BillingProfilesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class BillingProfilesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class BillingProfilesReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    billingProfile?: shared.BillingProfile;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
