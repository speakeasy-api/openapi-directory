import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LabOrdersPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class LabOrdersPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
