import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DocumentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class DocumentsDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class DocumentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
