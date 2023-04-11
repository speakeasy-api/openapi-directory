import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LineItemsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LineItemsDeleteRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
