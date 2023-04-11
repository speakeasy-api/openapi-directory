import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabOrdersDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class LabOrdersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
