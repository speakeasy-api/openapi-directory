import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MessagesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MessagesDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
