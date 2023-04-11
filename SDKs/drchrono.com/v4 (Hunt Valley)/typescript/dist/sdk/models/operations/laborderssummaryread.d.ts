import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabOrdersSummaryReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersSummaryReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class LabOrdersSummaryReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    labOrder?: shared.LabOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
