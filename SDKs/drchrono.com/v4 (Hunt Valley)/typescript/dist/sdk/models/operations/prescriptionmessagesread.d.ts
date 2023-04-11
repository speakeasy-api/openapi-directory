import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrescriptionMessagesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PrescriptionMessagesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    parentMessage?: number;
    patient?: number;
    since?: string;
}
export declare class PrescriptionMessagesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    prescriptionMessage?: shared.PrescriptionMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
