import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MessagesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MessagesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    doctorMessage?: shared.DoctorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
