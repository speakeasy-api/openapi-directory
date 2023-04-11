import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MessagesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MessagesCreateRequest extends SpeakeasyBase {
    doctor?: number;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    doctorMessage?: shared.DoctorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
