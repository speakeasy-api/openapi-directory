import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineItemsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LineItemsReadRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    billingLineItem?: shared.BillingLineItem;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
