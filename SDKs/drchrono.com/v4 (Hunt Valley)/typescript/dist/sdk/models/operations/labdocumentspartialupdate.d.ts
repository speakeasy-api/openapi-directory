import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabDocumentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabDocumentsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class LabDocumentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
