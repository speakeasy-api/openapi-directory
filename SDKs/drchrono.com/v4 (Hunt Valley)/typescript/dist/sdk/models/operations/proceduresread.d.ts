import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProceduresReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ProceduresReadRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    muDate?: string;
    muDateRange?: string;
    patient?: number;
    serviceDate?: string;
}
export declare class ProceduresReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    billingLineItem?: shared.BillingLineItem;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
