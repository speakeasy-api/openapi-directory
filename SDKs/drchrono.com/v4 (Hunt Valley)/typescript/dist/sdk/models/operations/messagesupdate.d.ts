import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MessagesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MessagesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
