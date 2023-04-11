import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabOrdersUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class LabOrdersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
