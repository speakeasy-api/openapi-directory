import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabOrdersReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class LabOrdersReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    labOrder?: shared.LabOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
