import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MessagesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MessagesPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
