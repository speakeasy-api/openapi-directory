import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineItemsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LineItemsCreateRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    billingLineItem?: shared.BillingLineItem;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
