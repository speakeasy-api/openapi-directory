import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OfficesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class OfficesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class OfficesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
